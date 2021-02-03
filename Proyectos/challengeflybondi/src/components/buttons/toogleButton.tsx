import * as React from 'react';

interface IToggleButton{
  style: string;
  text: string;
  icon?: string;
}

class ToggleButton extends React.Component <IToggleButton>{

  render(){
    return <button className={this.props.style}>
      {this.props.text}
      {this.props.icon}
    </button>
  }
}

export default ToggleButton;