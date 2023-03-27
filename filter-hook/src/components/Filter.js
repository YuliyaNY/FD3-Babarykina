import React, { useState } from 'react';
import Controls from './Controls';
import List from './List';

const Filter = (props) => {
  const [words, setWords] = useState(props.words);

  function apply(sort, filter) {
    let newWords = props.words.slice();
    if(filter) {
      newWords = newWords.filter(s => s.includes(filter));
    }
    if(sort) {
      newWords.sort();
    }
    setWords(newWords);
  }

  return (
    <>
      <Controls apply={apply} />
      <List words={words} />
    </>
  );
}

export default Filter;
