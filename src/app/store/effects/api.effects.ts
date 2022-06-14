import {Injectable} from '@angular/core';
import {ApiService} from '../../services/api-service';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as NotePageActions from '../actions/note-page.actions';
import * as ApiActions from '../actions/api-service.actions';
import {catchError, exhaustMap} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class ApiEffects {

  constructor(private apiService: ApiService,
              private actions$: Actions) {
  }

  loadNotes$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(NotePageActions.enter),
      exhaustMap(() => {
        return this.apiService.getNotesFromPeople()
          .pipe(map((notes) => {
            return ApiActions.peoplesLoaded({notes});
          }));
      })
    );
  });
}
