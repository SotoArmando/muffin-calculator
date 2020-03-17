import React from 'react';
import PropTypes from 'prop-types';


const Button = props => {
  const { name, wide, color } = props;
  if (name) {
    return <input className={`btn-0 size-${wide ? 2 : 1} ${color}`} type="button" value={name} />;
  }
  return null;
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  wide: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
};
export default Button;
