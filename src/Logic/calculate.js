import PropTypes from 'prop-types';
import operate from './operate';


class calculator {
  constructor() {
    this.total = '';
    this.next = '';
    this.operation = '';
  }

  operate(operation) {
    if (this.total > 0  && this.next > 0) {
      this.total = operate(this.total, this.next, operation);
    } 
  }

  tap(text) {
    const condition = ['+/-', '%', '÷', 'X', '-', '+'].indexOf(text);
    if (condition !== -1) {
      this.operation = text;
    } else {
      this.total +=  text;
    }
  }
}

export default calculator;
