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
      map((notesState) => notesState.isLoading),
      distinctUntilChanged()
    );
  }

  notes(): Observable<Note[]> {
    return this.state.asObservable().pipe(
      map((notesState) => notesState.notes),
      distinctUntilChanged()
    );
  }

  setNote(note: Note) {
    console.log(this.getState.notes, note);
    this.setState({
      notes: [...this.getState.notes.filter((n) => n.id !== note.id), note],
    });
  }

  deleteNote(noteId: string) {
    this.setState({
      notes: [...this.getState.notes.filter((n) => n.id !== noteId)],
    });
  }

  /**
   * Method changing loading status
   * @param newLoadingStatus loading status
   */
  public changeLoadingStatus(newLoadingStatus: boolean) {
    this.state.next({
      ...this.getState,
      isLoading: newLoadingStatus
    });
  }

  /**
   * Method adds list of new notes excluding duplicates.
   * @param notes new notes
   */
  public setNotes(notes: Note[]) {
    this.setState({
      notes: [...this.getState.notes,
        ...notes.filter(note => !this.getState.notes.map(n => n.id).includes(note.id))]
    });
  }

}
