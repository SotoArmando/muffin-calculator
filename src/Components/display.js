import React from 'react';

class Display extends React.Component {
  render() {
    return (
      <div className="display">
        <span>{this.props.result}</span>
      </div>
    );
  }
}

export default Display;