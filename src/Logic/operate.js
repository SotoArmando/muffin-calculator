const Big = require('big-js');


export default function operate(numberOne, numberTwo, operation) {
  const operationssrt = ['+/-', '%', '÷', 'X', '-', '+'];
  let z;

  const x = Big((numberOne === '') ? 0 : numberOne);
  const y = Big((numberTwo === '') ? 0 : numberTwo);

  switch (operation) {
    case operationssrt[0]:
      z = x.mul(-1).toFixed();
      break;
    case operationssrt[1]:
      z = x.mod(y).toFixed();
      break;
    case operationssrt[2]:
      z = x.div(y).toFixed();
      break;
    case operationssrt[3]:
      z = x.mul(y).toFixed();
      break;
    case operationssrt[4]:
      z = x.minus(y).toFixed();
      break;
    case operationssrt[5]:
      z = x.plus(y).toFixed();
      break;
    default:
      z = 0;
      break;
  }
  return z;
}
