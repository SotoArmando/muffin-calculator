import React from 'react';
import './style.css';
import Buttonpanel from './Components/buttonpanel';
import Display from './Components/display';
// import calculate from './Logic/calculate';

function App() {
  return (
    <div className="App">
      <link href="https://fonts.googleapis.com/css?family=Spartan:400,500,700&display=swap" rel="stylesheet" />
      <Display result={0} />
      <Buttonpanel names={['AC', '+/-', '%', '÷']} />
      <Buttonpanel names={['7', '8', '9', 'X']} />
      <Buttonpanel names={['4', '5', '6', '-']} />
      <Buttonpanel names={['1', '2', '3', '+']} />
      <Buttonpanel names={['0', '.', '=']} />
    </div>
  );
}

export default App;
