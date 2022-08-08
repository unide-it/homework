import { Component, OnInit } from '@angular/core';
import { NotesService } from './services/notes-service';
import { ApiService } from "./services/api-service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  notes = this.notesService.notes();
  isLoading = this.notesService.isLoading();

  constructor(private notesService: NotesService, private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.notesService.changeLoadingStatus(true);
    this.apiService.fetchNotes().subscribe(notes => {
      this.notesService.setNotes(notes);
      this.notesService.changeLoadingStatus(false);
    });
  }
}
