import {Note} from '../../models/note';
import {createReducer, on} from '@ngrx/store';
import * as NotePageActions from '../actions/note-page.actions';
import * as ApiActions from '../actions/api-service.actions';
import {createEntityAdapter, EntityState} from '@ngrx/entity';

export const adapter = createEntityAdapter<Note>();

export interface State extends EntityState<Note> {
  loaded: boolean,
  loading: boolean
}

export const initialState: State = adapter.getInitialState({
  loaded: false,
  loading: false,
});


export const reducer = createReducer(
  initialState,
  on(NotePageActions.enter, (state) => {
    return {
      ...state,
      loading: true,
      loaded: false
    };
  }),
  on(ApiActions.peoplesLoaded, (state, action) => {
    return adapter.setAll(action.notes, {
      ...state,
      loading: false,
      loaded: true
    });
  }),
  on(NotePageActions.createNote, (state, action) => {
    return adapter.addOne(action.note, {
      ...state,
      loading: false,
      loaded: true
    })
  }),
  on(NotePageActions.deleteNote, (state, action) => {
    return adapter.removeOne(action.noteId, state);
  })
);


export const { selectAll, selectEntities } = adapter.getSelectors();

export const getNotesLoading = (state: State) => state.loading;
export const getNotesLoaded = (state: State) => state.loaded;
