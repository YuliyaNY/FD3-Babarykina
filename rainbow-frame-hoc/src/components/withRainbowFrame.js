import React from 'react';
import './RainbowFrame.css';

function withRainbowFrame(colors) {
    return function(Comp) {
      return props => (
        <div className='RainbowFrame' style={{border:"solid 3px black"}}>
            {colors.reduce((prev, color) => <div style={{border: `solid 3px ${color}`}}>{prev}</div>,  <Comp {...props} />)}
        </div>
      );
    };
}


export { withRainbowFrame };