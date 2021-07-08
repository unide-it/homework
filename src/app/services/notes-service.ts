import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { Note } from '../models/note';


interface NotesState {
  notes: Note[];
  isLoading: boolean;
  error?: string;
}

const initialState = {
  notes: [],
  isLoading: false,
};

@Injectable({
  providedIn: 'root',
})

export class NotesService {

  state: BehaviorSubject<NotesState>;

  constructor() {
    this.state = new BehaviorSubject<NotesState>(initialState);
  }

  protected get getState() {
    return this.state.getValue();
  }

  protected setState(newState: Partial<NotesState>) {
    this.state.next({
      ...this.getState,
      ...newState,
    });
  }

  isLoading(): Observable<boolean> {
    return this.state.asObservable().pipe(
      map(notesState => notesState.isLoading),
      distinctUntilChanged()
    );
  }

  startLoading() {
    this.setState({
      isLoading: true
    });
  }

  endLoading() {
    this.setState({
      isLoading: false
    });
  }

  notes(): Observable<Note[]> {
    return this.state.asObservable().pipe(
      map(notesState => notesState.notes),
      distinctUntilChanged()
    );
  }

  setNote(note: Note) {
    this.setState({
      notes: [
        ...this.getState.notes.filter((n) => n.id !== note.id),
        note
      ]
    });
  }

  deleteNote(noteId: string) {
    this.setState({ notes: [...this.getState.notes.filter(n => n.id !== noteId)] });
  }
}

