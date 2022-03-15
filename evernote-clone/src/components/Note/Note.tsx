import React from 'react';
import ScNote from './styled'
import NoteList from "../NoteList/NoteList";
import NoteField from "../NoteField/NoteField";

interface NoteProps {
}

const Note = ({}:NoteProps) => {
  return (
    <ScNote>
       <NoteList/>
        <div className="vertical-line"></div>
       <NoteField note={{
           id: 'note-3',
           title: '',
           text: '',
           createdAt: 'now',
           tags: ['first tag']
       }}/>
    </ScNote>
  );
}

export default Note;
