import React from 'react';
import './style.css';
import Buttonpanel from './Components/buttonpanel';
import Display from './Components/display';
import calculate from './Logic/calculate';
import calculator from './Logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { result: '' };
  }
  handleClick = (name) => {
    debugger;
    const { calculator } = this.state;
    if (!calculator) {
      calculator.tap(name);
      this.setState({ result: calculator.getnumber(), calculator: new calculate() })
    } else {
      calculator.tap(name);
      this.setState({ result: calculator.getnumber(), calculator: calculator })
    }
  };

  render() {
    debugger;
    const { result } = this.state;
    return (
      <div className="App">
        <link href="https://fonts.googleapis.com/css?family=Spartan:400,500,700&display=swap" rel="stylesheet" />
        <Display key={'5' + new Date().getTime()} result={result} />
        <Buttonpanel key={'0' + new Date().getTime()} names={['AC', '+/-', '%', '÷']} clickHandler={this.handleClick} />
        <Buttonpanel key={'1' + new Date().getTime()} names={['7', '8', '9', 'X']} clickHandler={this.handleClick} />
        <Buttonpanel key={'2' + new Date().getTime()} names={['4', '5', '6', '-']} clickHandler={this.handleClick} />
        <Buttonpanel key={'3' + new Date().getTime()} names={['1', '2', '3', '+']} clickHandler={this.handleClick} />
        <Buttonpanel key={'4' + new Date().getTime()} names={['0', '.', '=']} clickHandler={this.handleClick} />
      </div>
    )
  };
}

export default App;
