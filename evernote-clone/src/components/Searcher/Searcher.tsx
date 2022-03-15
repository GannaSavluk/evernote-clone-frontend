import React from 'react';
import ScSearcher from './styled'

interface SearcherProps {
placeholder?: string,
}

const Searcher = ({placeholder}:SearcherProps) => {
  return (
    <ScSearcher>
        <div className="input-wrapper">
           <input placeholder={placeholder}/>
        </div>
    </ScSearcher>
  );
}

export default Searcher;
