import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { concatMap, Observable, of } from "rxjs";
import { map } from "rxjs/operators";
import { Note } from "../models/note";

/**
 * Returned person from API
 */
interface Person {
  name: string,
  hair_color: string;
}

/**
 * Response from API
 */
interface ApiResponse {
  count: number,
  previous: string,
  next: string,
  results: Person[]
}

/**
 * Service fetching data from API and return as observable of Notes
 */
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public static API_URL = 'https://swapi.dev/api/people';

  /**
   *
   * @param _httpClient client HTTP API for application
   */
  constructor(private _httpClient: HttpClient) {
  }

  /**
   * Method return observable of people from api.
   */
  private fetchPeople(): Observable<Person[]> {
    return this.fetchPeopleByPage(ApiService.API_URL);
  }

  /**
   * Method return people as observable  from specific page of api.
   * @param url url to specific page of results
   */
  private fetchPeopleByPage(url: string): Observable<Person[]> {
    return this._httpClient.get<ApiResponse>(url, {observe: "body"}).pipe(
      concatMap(value => {
        let results = value.results;
        if (value.next) {
          return this.fetchPeopleByPage(value.next).pipe(
            map(value1 => [...results, ...value1])
          );
        } else {
          return of(results);
        }
      })
    )
  }

  /**
   * Method return observable of notes. This method get observable of people and map to observable of notes.
   */
  public fetchNotes(): Observable<Note[]> {
    return this.fetchPeople().pipe(
      map(people => {
        return people
          .map(person => {
              return {
                id: person.name,
                title: person.name,
                note: person.hair_color
              } as Note
            }
          )
      })
    )
  }

}
