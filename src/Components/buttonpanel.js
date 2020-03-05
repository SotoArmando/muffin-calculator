import React from 'react';
import Button from './button'

class Buttonpanel extends React.Component {
  render() {
    return (
      <div className="buttonpanel">
        {this.props.names.map((item) => <Button name={item}></Button>)}
      </div>
    );
  }
}

export default Buttonpanel;