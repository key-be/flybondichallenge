import * as React from 'react';
import '../../styles/Buttons.scss';

interface IGeneralButtonProps{
  style: string;
  text: string;
  icon?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  handleClick?: any;
}

class GeneralButton extends React.Component <IGeneralButtonProps>{
  render(){
    return <button 
        className={this.props.style}
        type={this.props.type || 'submit'}
        onClick={() => this.props.handleClick && this.props.handleClick()}
        >
      {this.props.icon}
      {this.props.text}
      </button>
  }
}

export default GeneralButton;