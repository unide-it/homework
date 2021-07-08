import { Component, OnInit } from '@angular/core';
import { NotesService } from './services/notes-service';
import { ApiService, People, Person } from './services/api-service';
import { Note } from './models/note';

@Component({
  selector: 'subject-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {

  notes = this.notesService.notes();
  isLoading = this.notesService.isLoading();
  constructor(private notesService: NotesService, private apiService: ApiService) {

  }

  ngOnInit(): void {
    this.notesService.startLoading();
    this.getNotesPage();
  }

  getNotesPage(url?: string) {
    this.apiService.getNotesPage(url).subscribe((people: People) => {
      people.results.forEach((person: Person) => {
        const note: Note = {
          id: person.name,
          title: person.name,
          note: person.hair_color
        };
        this.notesService.setNote(note);
      });
      const nextPageUrl = people.next;
      if (nextPageUrl) {
        this.getNotesPage(nextPageUrl);
      } else {
        this.notesService.endLoading();
      }
    });
  }
}
