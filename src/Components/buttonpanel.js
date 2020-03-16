import React from 'react';
import PropTypes from 'prop-types';
import Button from './button';


const Buttonpanel = props => {
  const names = [['AC', '+/-', '%', '÷'], ['7', '8', '9', 'X'], ['4', '5', '6', '-'], ['1', '2', '3', '+'], ['0', '.', '=']]
  debugger
  return (
    <div>
      {
        names.map((item) => (
          <div className="Buttonpanel">
            {
              item.map((iitem, key) => 
                <Button
                  key={0}
                  name={iitem}
                  wide={(key === 0 && item.length === 3) ? 2 : 1}
                  color={key === item.length - 1}
                />
              )
            }
          </div>
        ))
      }
    </div>
  );
};
Buttonpanel.propTypes = {
  names: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Buttonpanel;
