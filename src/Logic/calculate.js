import PropTypes from 'prop-types';
import operate from './operate';


class calculator {
  constructor() {
    this.total = PropTypes.number;
    this.next = PropTypes.number;
    this.operation = PropTypes.string;
  }

  operate(operation) {
    this.total = operate(this.total, this.next, operation);
  }

  set tap(text) {
    const condition = ['+/-', '%', '÷', 'X', '-', '+'].indexOf(text);
    if (condition !== -1) {
      this.operation = text;
    } else {
      this.next = text;
    }
  }
}

export default calculator;
