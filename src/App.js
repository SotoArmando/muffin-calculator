/* eslint react/jsx-filename-extension: 0 react/jsx-one-expression-per-line:0 */

import React from 'react';
import './style.css';
import Buttonpanel from './Components/buttonpanel'
import Display from './Components/display'

function App() {
  return (
    <div className="App">
      <link href="https://fonts.googleapis.com/css?family=Spartan:400,500,700&display=swap" rel="stylesheet"></link>
      <Display result={0} ></Display>
      <Buttonpanel names ={['AC','+/-','%','÷']}></Buttonpanel>
      <Buttonpanel names ={['7','8','9','X']}></Buttonpanel>
      <Buttonpanel names ={['4','5','6','-']}></Buttonpanel>
      <Buttonpanel names ={['1','2','3','+']}></Buttonpanel>
      <Buttonpanel names ={['0','.','=']}></Buttonpanel>
    </div>
  );
}

export default App;
