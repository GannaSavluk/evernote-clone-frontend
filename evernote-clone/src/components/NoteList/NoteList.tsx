import React from 'react';
import { ScNoteList } from './styled'
import OneNote from "./OneNote";

interface NoteProps {
}

const notes = [ // todo
    {
        id: 'note-1',
        title: '',
        text: '',
        createdAt: '2 minutes ago',
        tags: ['first tag', 'second tag']
    },
    {
        id: 'note-2',
        title: 'Title',
        text: 'text text text',
        createdAt: '3 minutes ago',
        tags: ['first tag', 'second tag']
    },
    {
        id: 'note-3',
        title: '',
        text: '',
        createdAt: '4 minutes ago',
        tags: ['first tag']
    },
]

const NoteList = ({}:NoteProps) => {
    const putRightWord = (length: number) => {
        if (length === 1) return 'заметка'
        else if (length > 1 && length <= 4) return 'заметки'
        else return 'заметок'
    }
  return (
    <ScNoteList>
      <h3 className="title">Заметки</h3>
      <div className="note-list-header">
        <span>{notes.length} {putRightWord(notes.length)}</span>
        <div className="filters">
          <span>фильтры</span>
        </div>
      </div>
      <div className="notes">
         {notes.map((note, index) => {
            return <OneNote
              key={note.id}
              title={note.title}
              text={note.text}
              createdAt={note.createdAt}
              tags={note.tags}
              index={index}
               />
         })}
      </div>
    </ScNoteList>
  );
}

export default NoteList;
