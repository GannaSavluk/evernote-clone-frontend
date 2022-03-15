export interface NoteState {
    id: string,
    title: string,
    text: string,
    tags: string[],
    createdAt: string
}
export interface NotesState {
    notes: NoteState[]
}

export enum NoteActionTypes {
    POST_NOTE_TOKEN = 'POST_NOTE_TOKEN',
}

interface PostNoteTokenAction {
    type: NoteActionTypes.POST_NOTE_TOKEN;
    payload: NoteState
}


export type notesAction =
    | PostNoteTokenAction;
