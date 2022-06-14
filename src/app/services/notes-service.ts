import {Injectable} from '@angular/core';
import {Note} from '../models/note';
import {Store} from '@ngrx/store';
import * as NotePageActions from '../store/actions/note-page.actions';

@Injectable({
  providedIn: 'root',
})
export class NotesService {

  constructor(private store: Store) {
  }

  setNote(note: Note) {
    this.store.dispatch(NotePageActions.createNote({
      note: note
    }));
  }

  deleteNote(noteId: string) {
    this.store.dispatch(NotePageActions.deleteNote({
      noteId: noteId
    }));
  }
}
