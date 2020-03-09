import React from 'react';
import './style.css';
import Buttonpanel from './Components/buttonpanel';
import Display from './Components/display';
import Calculator from './Logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { result: '', calculator: new Calculator() };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(name) {
    const { calculator } = this.state;
    calculator.tap(name);
    this.setState({ result: calculator.getnumber(), calculator });
  }

  render() {
    const { result } = this.state;
    return (
      <div className="App">
        <link href="https://fonts.googleapis.com/css?family=Spartan:400,500,700&display=swap" rel="stylesheet" />
        <Display key={'5'.concat(new Date().getTime())} result={result} />
        <Buttonpanel key={'0'.concat(new Date().getTime())} names={['AC', '+/-', '%', '÷']} clickHandler={this.handleClick} />
        <Buttonpanel key={'1'.concat(new Date().getTime())} names={['7', '8', '9', 'X']} clickHandler={this.handleClick} />
        <Buttonpanel key={'2'.concat(new Date().getTime())} names={['4', '5', '6', '-']} clickHandler={this.handleClick} />
        <Buttonpanel key={'3'.concat(new Date().getTime())} names={['1', '2', '3', '+']} clickHandler={this.handleClick} />
        <Buttonpanel key={'4'.concat(new Date().getTime())} names={['0', '.', '=']} clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
