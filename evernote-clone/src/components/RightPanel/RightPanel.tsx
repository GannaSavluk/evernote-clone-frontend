import React from 'react';
import ScRightPanel from './styled'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { noteState } from '../../recoil/atoms'

import Note from '../Note/Note'

interface RightPanelProps {

}

const RightPanel = ({}:RightPanelProps) => {
  const [isNoteOpen, setIsNoteOpen] = useRecoilState(noteState)

  return (
    <ScRightPanel>
      {isNoteOpen && <Note/>}
    </ScRightPanel>
  );
}

export default RightPanel;
