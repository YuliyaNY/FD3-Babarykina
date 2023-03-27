import React from 'react';

const List = (props) => {

  return (
    <>
      {props.words.map((word, inx) => <p key={inx}>{word}</p>)}
    </>
  );
}

export default List;
