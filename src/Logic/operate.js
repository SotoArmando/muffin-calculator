const Big = require('big-js');


export default function operate(numberOne, numberTwo, operation) {
  const operationssrt = ['+/-', '%', '÷', 'X', '-', '+'];
  let x; let y; let z;

  x = Big(numberOne);
  y = Big(numberTwo);

  switch (operation) {
    case operationssrt[0]:
      z = Big(numberOne).mul(-1).toFixed();
    case operationssrt[1]:
      z = Big(numberOne).mod(Big(numberTwo)).toFixed();
    case operationssrt[2]:
      z = Big(numberOne).div(Big(numberTwo)).toFixed();
    case operationssrt[3]:
      z = x.mul(y).toFixed();
    case operationssrt[4]:
      z = x.minus(y).toFixed();
    case operationssrt[5]:
      z = Big(numberOne).plus(Big(numberTwo)).toFixed();
    default:
      z = 0;
  }
  return z;
}
