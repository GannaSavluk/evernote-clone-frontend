import { NoteActionTypes, notesAction, NotesState } from '../types/note'

const initialState: NotesState = {
notes: []
}

export const noteReducer = (state: NotesState = initialState, action: notesAction): NotesState => {
  switch (action.type) {
    case NoteActionTypes.POST_NOTE_TOKEN: {
      return { ...state }
    }
    default:
      return state
  }
}
