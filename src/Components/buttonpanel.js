import React from 'react';

import PropTypes from 'prop-types';
import Button from './button';

const Buttonpanel = props => {
  const { clickHandler } = props;
  const names = [['AC', '+/-', '%', '÷'], ['7', '8', '9', 'X'], ['4', '5', '6', '-'], ['1', '2', '3', '+'], ['0', '.', '=']];

  function handleClick(name) {
    clickHandler(name);
  }

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
                  clickHandler={handleClick}
                />
              ))
            }
          </div>
        ))
      }
    </div>
  );
};


Buttonpanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};


export default Buttonpanel;
