import { Component } from '@angular/core';
import { NotesService } from './services/notes-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  notes = this.notesService.notes();
  isLoading = this.notesService.notes();
  constructor(private notesService: NotesService) {}
}
