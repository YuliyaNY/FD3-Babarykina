import React, { Component } from 'react';
import DoubleButton from './components/DoubleButton';
import { withRainbowFrame } from './components/withRainbowFrame';

class App extends Component {
  render() {
    let colors = ['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];

    let FramedDoubleButton = withRainbowFrame(colors)(DoubleButton);

    return (
      <>
        <DoubleButton caption1='oднажды' caption2='пору' cbPressed={num => alert(num)}>
          <span>в студеную зимнюю</span>
        </DoubleButton>

        <FramedDoubleButton caption1='я из лесу' caption2='мороз' cbPressed={num => alert(num)}>
          <span>вышел, был сильный</span>
        </FramedDoubleButton>
      </>
    );
  }
}

export default App;
