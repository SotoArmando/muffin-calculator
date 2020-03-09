import React from 'react';
import PropTypes from 'prop-types';


const Button = props => {
  const { name, wide, color } = props;
  if (name) {
    return <input className={`btn-0 size-${wide} ${(color) ? 'last' : ''}`} type="button" value={name} />;
  }
  return null;
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  wide: PropTypes.number.isRequired,
  color: PropTypes.bool.isRequired,
};
export default Button;
