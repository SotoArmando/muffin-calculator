import React from 'react';
import './style.css';
import Buttonpanel from './Components/buttonpanel';
import Display from './Components/display';
import calculate from './Logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { total: '', next: null, operation: null };
  }

  handleClick = (name) => {
    debugger;
    if (!this.state.calculator) {
      let calculator = new calculate();
      calculator.tap(name);
      calculator.operate(name);
      this.setState({ total: calculator.total, next: calculator.next, operation: calculator.operation, calculator: calculator })
    } else {
      this.state.calculator.tap(name);
      this.state.calculator.operate(name);
      this.setState({ total: this.state.calculator.total, next: this.state.calculator.next, operation: this.state.calculator.operation, calculator: this.state.calculator })
    }

  };

  render() {
    debugger;
    const { total } = this.state;
    return (
      <div className="App">
        <link href="https://fonts.googleapis.com/css?family=Spartan:400,500,700&display=swap" rel="stylesheet" />
        <Display key={'5' + new Date().getTime()} result={total} />
        <Buttonpanel key={'0' + new Date().getTime()} names={['AC', '+/-', '%', '÷']} clickHandler={this.handleClick} />
        <Buttonpanel key={'1' + new Date().getTime()} names={['7', '8', '9', 'X']} clickHandler={this.handleClick} />
        <Buttonpanel key={'2' + new Date().getTime()} names={['4', '5', '6', '-']} clickHandler={this.handleClick} />
        <Buttonpanel key={'3' + new Date().getTime()} names={['1', '2', '3', '+']} clickHandler={this.handleClick} />
        <Buttonpanel key={'4' + new Date().getTime()} names={['0', '.', '=']} />
      </div>
    )
  };
}

export default App;
