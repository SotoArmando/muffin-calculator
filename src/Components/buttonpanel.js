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
        names.map((item,key) => (
          <div key={('5'+key).concat(new Date().getTime())} className="Buttonpanel">
            {
              item.map((iitem, key) => (
                <Button
                  key={('3'+iitem).concat(new Date().getTime())}
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
