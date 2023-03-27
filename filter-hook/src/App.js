import React from 'react';
import Filter from './components/Filter';

const App = () => {
  let wordsArr = ['california', 'everything', 'aboveboard', 'washington', 'basketball', 'weathering', 'characters', 'literature', 'contraband', 'appreciate'];

  return (
    <div className="App">
      <Filter words={wordsArr}/>
    </div>
  );
}

export default App;
