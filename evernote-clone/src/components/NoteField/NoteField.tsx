import React, { useState } from 'react';
import ScNoteField from './styled'
import ReactQuill from 'react-quill'

interface NoteFieldProps {
    defaultValue?:string
    note: {
        id: string,
        title: string,
        text: string,
        tags: string[],
        createdAt: string
    }
}

// const createRandomId = () => { // todo
//     return `${Math.floor(Math.random() * 1000)}${Math.floor(Math.random() * 10000)}`
// }

const NoteField = ({defaultValue, note}:NoteFieldProps) => {
  const [inputData, setInputData] = useState({
      id: note.id,
      title: note.title,
      text:note.text,
      tags: note.tags,
      createdAt: note.createdAt
  })

    const changeText = (newData: string) => {
        setInputData({...inputData, text: newData})
    }
    const changeTitle = (newData: string) => {
        setInputData({...inputData, title: newData})
    }

  return (
    <ScNoteField>
        <div className="header">
          <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnPp4n9vJgrB8JMUFgE6aaYuRLw1H4kGI7Ag&usqp=CAU'} width={20}/>
          <span>Перейти в блокнот</span>
          <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw7_WDSGM3fx6PHvTkG5_njAApCo8vKzNYyIvnP5O3y4WhO0PlPTUw1Ah15cRtwMd79B4&usqp=CAU'} width={30}/>
        </div>

        <div className="horizontal-line"></div>

        <div className="note-space">
          <div className="panel"></div>
            <input placeholder={'Название'}
                   onChange={(e) => changeTitle(e.target.value)}/>
            <ReactQuill theme="snow"
                        className={'quill'}
                        defaultValue={defaultValue || ''}
                        placeholder="Наберите текст"
                        style={{height: '100%'}}
                        onChange={(e) => changeText(e)}

            />
          {/*<button>Добавить тэг</button>*/}
        </div>
    </ScNoteField>
  );
}

export default NoteField;
