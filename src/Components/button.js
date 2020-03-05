import React from 'react';

class Button extends React.Component {
  render() {
    if (this.props.name) {
      return <input className="btn-0" type="button" value={this.props.name} />
    } else 
    {
      return null
    }
  }
}

export default Button;