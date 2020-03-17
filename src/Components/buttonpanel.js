import React from 'react';
import Button from './button';

const Buttonpanel = () => {
  const names = [['AC', '+/-', '%', '÷'], ['7', '8', '9', 'X'], ['4', '5', '6', '-'], ['1', '2', '3', '+'], ['0', '.', '=']];
  return (
    <div>
      {
        names.map(item => (
          <div key={0} className="Buttonpanel">
            {
              item.map((iitem, key) => (
                <Button
                  key={0}
                  name={iitem}
                  wide={(key === 0 && item.length === 3)}
                  color={(key === item.length - 1) ? 'orange' : 'white'}
                />
              ))
            }
          </div>
        ))
      }
    </div>
  );
};

export default Buttonpanel;
