import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';

export interface People {
  count: number;
  next: string;
  previous: string;
  results: Person[];
}

export interface Person {
  name: string;
  hair_color: string;
}

@Injectable({providedIn: 'root'})
export class ApiService {
  constructor(private http: HttpClient) {}

  getNotesPage(url: string = `${environment.baseApiUrl}/people`) {
    return this.http.get<People>(url);
  }
}
