const Big = require('big.js');


export default function operate(numberOne, numberTwo, operation) {
  const operationssrt = ['+/-', '%', '÷', 'X', '-', '+'];

  switch (operation) {
    case operationssrt[0]:
      return new Big(numberOne).multiply(-1);
    case operationssrt[1]:
      return new Big(numberOne).mod(numberTwo);
    case operationssrt[2]:
      return new Big(numberOne).div(numberTwo);
    case operationssrt[3]:
      return new Big(numberOne).multiply(numberTwo);
    case operationssrt[4]:
      return new Big(numberOne).minus(numberTwo);
    case operationssrt[5]:
      return new Big(numberOne).plus(numberTwo);
    default:
      return 0;
  }
}
