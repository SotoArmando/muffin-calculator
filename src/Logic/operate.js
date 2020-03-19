const Big = require('big-js');


export default function operate(numberOne, numberTwo, operation) {
  const operationssrt = ['+/-', '%', '÷', 'X', '-', '+'];
  let x; let y; let z;

  x = Big(numberOne);
  y = Big(numberTwo);

  switch (operation) {
    case operationssrt[0]:
      return x.mul(-1).toFixed();
    case operationssrt[1]:
      return x.mod(y).toFixed();
    case operationssrt[2]:
      return x.div(y).toFixed();
    case operationssrt[3]:
      z = x.mul(y).toFixed();
      return z;
    case operationssrt[4]:
      x = Big(numberOne);
      y = Big(numberTwo);
      z = x.minus(y).toFixed();
      return z;
    case operationssrt[5]:
      return x.plus(y).toFixed();
    default:
      return 0;
  }
}
