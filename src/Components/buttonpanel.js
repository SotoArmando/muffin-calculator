import React from 'react';
import PropTypes from 'prop-types';
import Button from './button';

const Buttonpanel = props => {
  const { names, clickHandler } = props;

  function handleClick(name){
    clickHandler(name);
  }

  return (
    <div className="buttonpanel">
      {
        names.map((item, key) => (
          <Button
            key={key+new Date().getTime()} 
            name={item}
            size={(key === 0 && names.length === 3) ? 2 : 1}
            last={key === names.length - 1}
            clickHandler={handleClick}
          />
        ))
      }
    </div>
  );
};
Buttonpanel.propTypes = {
  names: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Buttonpanel;
