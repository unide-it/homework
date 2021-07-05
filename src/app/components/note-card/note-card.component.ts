import {Component, Input, OnInit} from '@angular/core';
import { Note } from 'src/app/models/note';
import { NotesService } from 'src/app/services/notes-service';

declare const feather;

@Component({
  selector: 'subject-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent implements OnInit {
  @Input() note: Note;

  constructor(private notesService: NotesService) {
  }

  ngOnInit() {
    feather.replace();
  }

  deleteNote() {
    this.notesService.deleteNote(this.note.id)
  }

}
