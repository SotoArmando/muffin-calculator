import React from 'react';
import PropTypes from 'prop-types';
import Button from './button';


const Buttonpanel = props => {
  const { names } = props;
  return (
    <div className="buttonpanel">
      {
        names.map((item, key) => (
          <Button
            key={0}
            name={item}
            wide={(key === 0 && names.length === 3) ? 2 : 1}
            color={key === names.length - 1}
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
