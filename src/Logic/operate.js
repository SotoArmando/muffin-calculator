const Big = require('big-js');


export default function operate(numberOne, numberTwo, operation) {
  const operationssrt = ['+/-', '%', '÷', 'X', '-', '+'];
  let z;

  const x = Big(numberOne);
  const y = Big(numberTwo);

  switch (operation) {
    case operationssrt[0]:
      z = Big(numberOne).mul(-1).toFixed();
      break;
    case operationssrt[1]:
      z = Big(numberOne).mod(Big(numberTwo)).toFixed();
      break;
    case operationssrt[2]:
      z = Big(numberOne).div(Big(numberTwo)).toFixed();
      break;
    case operationssrt[3]:
      z = x.mul(y).toFixed();
      break;
    case operationssrt[4]:
      z = x.minus(y).toFixed();
      break;
    case operationssrt[5]:
      z = Big(numberOne).plus(Big(numberTwo)).toFixed();
      break;
    default:
      z = 0;
      break;
  }
  return z;
}
