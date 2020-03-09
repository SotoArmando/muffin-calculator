const Big = require('big.js');


export default function operate(numberOne, numberTwo, operation) {
  const operationssrt = ['+/-', '%', '÷', 'X', '-', '+'];
  let x; let y; let z;
  switch (operation) {
    case operationssrt[0]:
      return new Big(numberOne).mul(-1).toFixed();
    case operationssrt[1]:
      return new Big(numberOne).mod(new Big(numberTwo)).toFixed();
    case operationssrt[2]:
      return new Big(numberOne).div(new Big(numberTwo)).toFixed();
    case operationssrt[3]:
      x = new Big(numberOne);
      y = new Big(numberTwo);
      z = x.mul(y).toFixed();
      return z;
    case operationssrt[4]:
      x = new Big(numberOne);
      y = new Big(numberTwo);
      z = x.minus(y).toFixed();
      return z;
    case operationssrt[5]:
      return new Big(numberOne).plus(new Big(numberTwo)).toFixed();
    default:
      return 0;
  }
}
