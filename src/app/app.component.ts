import {Component} from '@angular/core';
import { NotesService } from './services/notes-service';

@Component({
  selector: 'subject-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {

  notes = this.notesService.notes();
  isLoading = this.notesService.notes();
  constructor(private notesService: NotesService) {

  }

}
