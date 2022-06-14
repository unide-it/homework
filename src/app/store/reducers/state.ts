import * as fromNotes from './notes.reducer'
import {ActionReducerMap, createFeatureSelector, createSelector, MetaReducer, StoreModule} from '@ngrx/store';
import {NgModule} from '@angular/core';

export const FEATURE_KEY = 'shared-notes'

export interface State {
  notes: fromNotes.State
}

export const reducers: ActionReducerMap<State> = {
  notes: fromNotes.reducer
}

export const metaReducers: MetaReducer<State>[] = [];

@NgModule({
  imports: [StoreModule.forFeature(FEATURE_KEY, reducers, { metaReducers })]
})
export class SharedStateNotesModule {}

export const selectSharedNotesState = createFeatureSelector<State>(FEATURE_KEY);

export const selectNotesState = createSelector(
  selectSharedNotesState,
  (selectSharedNotesState) => selectSharedNotesState.notes
)
export const selectAllNotes = createSelector(
  selectNotesState,
  fromNotes.selectAll
)

export const getNotesLoaded = createSelector(
  selectNotesState,
  fromNotes.getNotesLoaded
)
export const getNotesLoading = createSelector(
  selectNotesState,
  fromNotes.getNotesLoading
)
