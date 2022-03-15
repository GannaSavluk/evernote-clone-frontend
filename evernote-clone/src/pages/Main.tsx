import React from 'react';
import ScMain from './styled'
import LeftPanel from "../components/LeftPanel/LeftPanel";
import RightPanel from "../components/RightPanel/RightPanel";

interface LeftPanelProps {

}

const Main = ({}:LeftPanelProps) => {
  return (
    <ScMain>
      <LeftPanel/>
      <RightPanel/>
    </ScMain>
  );
}

export default Main;
