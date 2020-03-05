import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { name, size, last, clickHandler } = props;

  function handleClick(_name)  {
    clickHandler(name);
  }
  
  if (name) {
    return <input className={`btn-0 size-${size} ${(last) ? 'last' : ''}`} type='button' value={name} onClick={handleClick} />;
  }
  return null;
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  last: PropTypes.bool.isRequired,
};
export default Button;
