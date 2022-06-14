import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as NotePageActions from './store/actions/note-page.actions';
import {Observable} from 'rxjs';
import {Note} from './models/note';
import {getNotesLoading, selectAllNotes} from './store/reducers/state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  notes$: Observable<Note[]>;
  isLoading$: Observable<boolean>;

  constructor(private store: Store) {
    this.notes$ = this.store.select(selectAllNotes);
    this.isLoading$ = this.store.select(getNotesLoading);
  }

  ngOnInit(): void {
    this.store.dispatch(NotePageActions.enter());
  }

}
