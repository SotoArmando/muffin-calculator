import React from 'react';
import PropTypes from 'prop-types';


const Button = props => {
  const { name, size, last } = props;
  if (name) {
    return <input className={`btn-0 size-${size} ${(last) ? 'last' : ''}`} type="button" value={name} />;
  }
  return null;
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  last: PropTypes.bool.isRequired,
};
export default Button;
