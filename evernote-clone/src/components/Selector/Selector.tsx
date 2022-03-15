import React, { useState } from 'react';
import ScSelector from './styled'
import {useRecoilState, useSetRecoilState} from "recoil";
import { noteState } from "../../recoil/atoms";

interface SelectorProps {
    title?: string,
    label?: string,
}

const Selector = ({title, label}:SelectorProps) => {
  const [isOpen, setIsOpen] = useState(false)
    const [isNoteOpen, setIsNoteOpen] = useRecoilState(noteState)
  return (
    <ScSelector>
        {label && <label htmlFor={label}></label>}
            <button className="select-head" onClick={()=>setIsOpen(!isOpen)}>{title}</button>
            <div className="select-list" style={!isOpen ? {display: 'none'} : {}}>
                <button onClick={() =>setIsNoteOpen(true)}>Заметка</button>
                <button onClick={() =>setIsNoteOpen(true)}>Задача</button>
            </div>
    </ScSelector>
  );
}

export default Selector;
