import React from 'react';
import PropTypes from 'prop-types';

const Display = props => {
  const { result } = props;
  return (
    <div className="display">
      <span>{result}</span>
    </div>
  );
};
Display.propTypes = {
  result: PropTypes.string.isRequired,
};
export default Display;
