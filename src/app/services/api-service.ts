import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClientService} from './http-client.service';
import {map} from 'rxjs/operators';
import {Note} from '../models/note';

@Injectable({providedIn: 'root'})
export class ApiService {

  private static API_BASE_URL = 'https://swapi.dev/api/';

  constructor(private http: HttpClientService) {
  }

  getPeople(): Observable<any> {
    return this.http.get(`${(ApiService.API_BASE_URL)}people/`);
  }

  getNotesFromPeople(): Observable<Note[]> {
    return this.getPeople()
      .pipe(map(x => x.results.map((person: any) => ({
        id: person.name,
        title: person.name,
        note: person.hair_color
      } as Note))));
  }
}
