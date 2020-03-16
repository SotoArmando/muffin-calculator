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
      <Buttonpanel />
    </div>
  );
}

export default App;
