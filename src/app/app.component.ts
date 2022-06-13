import {Component, OnInit} from '@angular/core';
import {NotesService} from './services/notes-service';
import {ApiService} from './services/api-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  notes = this.notesService.notes();
  isLoading = this.notesService.notes();
  constructor(private notesService: NotesService,
              private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getNotesFromPeople().subscribe(x => {
      this.notesService.setNotes(x);
    });
  }

}
