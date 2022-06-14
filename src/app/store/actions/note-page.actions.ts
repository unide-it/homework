import {createAction, props} from '@ngrx/store';
import {Note} from '../../models/note';

export const enter = createAction('[Note Page] Enter');

export const createNote = createAction(
  '[Note Page] Create Note',
  props<{ note: Note}>()
);

export const deleteNote = createAction(
  '[Note Page] Delete Note',
  props<{ noteId: string }>()
);
