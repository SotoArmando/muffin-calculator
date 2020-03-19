import React from 'react';
import '../style.css';
import Buttonpanel from './buttonpanel';
import Display from './display';
import Calculator from '../Logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { result: '0', calculator: new Calculator() };
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
        <Buttonpanel key={`0${new Date().getTime()}`} clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
