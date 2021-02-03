import * as React from 'react';
import GeneralButton from './generalButton';

interface IToggleButton{
  text: string;
  style: string;
  icon?: string;
}

class ToggleButton extends React.Component <IToggleButton>{

  render(){
    return <GeneralButton 
      text={this.props.text}
      style={this.props.style}
      icon={this.props.icon}
      //handleClick={() => this.onClickHandler()}
    />

  }
}

export default ToggleButton;