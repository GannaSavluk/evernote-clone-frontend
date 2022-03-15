import React from 'react';
import { ScOneNote } from './styled'

interface OneNoteProps {
    title?: string,
    text?: string,
    createdAt: string,
    tags?: string[],
    index: number,
}

const OneNote = ({title, text, createdAt, tags, index}:OneNoteProps) => {
  return (
    <ScOneNote style={!index ? {borderTop: '1px solid #a4b5c4'} : {borderTop: ''}}>
      <h3 className="note-title" >{title || 'Без названия'}</h3>
      <p className="note-text">{text || ''} </p>
        <div className="one-note-footer">
          <span>{createdAt}</span>
          <div className="tags">
            {tags && tags.map((tag) => {
                return <button key={`tag-${title}-${createdAt}-${tag}`}>tag</button>
            }) }
          </div>
        </div>
    </ScOneNote>
  );
}

export default OneNote;
