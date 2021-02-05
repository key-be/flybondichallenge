import * as React from 'react';
import GeneralButton from './generalButton';

interface IDropDown{
  text: string;
  style: string;
  icon?: string;
  onClickHandler: any;
}

class DropDown extends React.Component <IDropDown>{

  render(){
    return <GeneralButton 
      text={this.props.text}
      style={this.props.style}
      icon={this.props.icon}
      handleClick={() => this.props.onClickHandler()}
    />

  }
}

export default DropDown;