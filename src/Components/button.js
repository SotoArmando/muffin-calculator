import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const {
    name, wide, color, clickHandler,
  } = props;

  function handleClick() {
    clickHandler(name);
  }

  if (name) {
    return <input className={`btn-0 size-${wide ? 2 : 1} ${color}`} type="button" value={name} onClick={handleClick} />;
  }
  return null;
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  wide: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};
export default Button;
