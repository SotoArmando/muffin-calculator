import React from 'react';
import Button from './button'

class Buttonpanel extends React.Component {
  render() {
    return (
      <div className="buttonpanel">
        {
          this.props.names.map((item, number) =>
            <Button name={item}
              size={(number === 0 && this.props.names.length === 3) ? 2 : 1}
              last={number === this.props.names.length - 1} >
            </Button>)
        }
      </div>
    );
  }
}

export default Buttonpanel;