import {createAction, props} from '@ngrx/store';
import {Note} from '../../models/note';

export const peoplesLoaded = createAction(
  '[Peoples API] Peoples Loaded Success',
  props<{ notes: Note[] }>()
);
