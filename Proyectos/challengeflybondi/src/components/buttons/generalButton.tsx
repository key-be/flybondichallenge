import * as React from 'react';
import '../../styles/Buttons.scss';

interface IGeneralButtonProps{
  style: string;
  price?: string;
}

class GeneralButton extends React.Component <IGeneralButtonProps>{
  render(){
    return <button className={this.props.style}>
        <sup>$</sup>
        <p>{this.props.price}</p>
      </button>
  }
}

export default GeneralButton;