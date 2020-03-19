import operate from './operate';


class calculator {
  constructor() {
    this.returnstotal = true;
    this.total = '';
    this.next = '';
    this.operation = '';
  }

  operate() {
    this.total = operate(this.total, this.next, this.operation);
  }

  getnumber() {
    if (this.returnstotal) {
      return this.total;
    }
    return this.next;
  }

  setnumber(number) {
    if (this.returnstotal) {
      this.total += number;
    } else {
      this.next += number;
    }
  }

  tap(text) {
    const condition1 = ['AC', '='].indexOf(text);
    const condition = ['+/-', '%', '÷', 'X', '-', '+'].indexOf(text);
    const condition2 = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].indexOf(text);
    if (condition !== -1) {
      if (condition === 0) {
        this.operation = text;
        this.operate();
      } else {
        this.operation = text;
        this.returnstotal = !this.returnstotal;
        this.next = '';
      }
    } else if (condition1 !== -1) {
      switch (condition1) {
        default:
          break;
        case 0:
          this.total = '0';
          this.next = '';
          this.operation = '';
          break;
        case 1:
          if (this.operation !== '') {
            this.operate();
            this.returnstotal = !this.returnstotal;
          }
          break;
      }
    } else if (condition2 !== -1) {
      if (this.total === '0') {
        this.total = '';
      }
      this.setnumber(text);
    }
  }
}

export default calculator;
