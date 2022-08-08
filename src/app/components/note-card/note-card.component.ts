import {AfterViewInit, Component, Input } from '@angular/core';
import { Note } from 'src/app/models/note';
import { NotesService } from 'src/app/services/notes-service';

import * as feather from 'feather-icons';

@Component({
  selector: 'subject-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.css'],
})
export class NoteCardComponent implements AfterViewInit {
  @Input() note?: Note;

  constructor(private notesService: NotesService) {}

  deleteNote() {
    if (this.note) this.notesService.deleteNote(this.note.id);
  }

  ngAfterViewInit(): void {
    feather.replace();
  }

}
