import { Component, OnInit } from '@angular/core';
import { NotesService } from './services/notes-service';
import { ApiService } from "./services/api-service";
import { Observable } from "rxjs";
import { Note } from "./models/note";

/**
 * Root component of application.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  notes: Observable<Note[]> = this.notesService.notes();
  isLoading: Observable<boolean> = this.notesService.isLoading();
  title: string = 'Welcome to observer-notes!';

  /**
   *
   * @param notesService service to management of notes
   * @param apiService service to fetching data from api
   */
  constructor(private notesService: NotesService, private apiService: ApiService) {
  }

  /**
   * Fetching notes from api and set add them to initial state of notes.
   */
  ngOnInit(): void {
    this.apiService.fetchNotes().subscribe(notes => {
        this.notesService.setNotes(notes)
      },
      error => {
        console.log('An unexpected error occurred while retrieving data from the server');
        console.log(error)
      }
    );
  }

}
