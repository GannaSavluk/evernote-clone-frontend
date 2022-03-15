import React from 'react';
import ScLeftPanel from './styled'
import Searcher from "../Searcher/Searcher";
import Selector from "../Selector/Selector";

interface LeftPanelProps {

}

const LeftPanel = ({}:LeftPanelProps) => {
  return (
    <ScLeftPanel>
        <div className="header">
            <img src={'https://d29fhpw069ctt2.cloudfront.net/icon/image/37798/preview.svg'} width={30}/>
            <span>User Name</span>
            <button>{'>'}</button>
        </div>
        <Searcher placeholder={'Поиск'}/>
        <Selector title={'Создать'}/>
    </ScLeftPanel>
  );
}

export default LeftPanel;
