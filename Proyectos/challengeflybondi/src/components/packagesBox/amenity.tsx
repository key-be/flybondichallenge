import * as React from 'react';
import '../../styles/SelectPackage.scss';

interface IAmenity{
  icon: string;
  text: string;
  subText?: string;
  hideItem?: boolean;
}

class Amenity extends React.Component<IAmenity>{
  render(){
    return <div className={`item ${this.props.hideItem ? 'item-hidden' : ''}`}>
      <img src={this.props.icon} alt=''/>
      <div className='text-content'>
        <p>{this.props.text}</p>
        <span>{this.props.subText}</span>
      </div>
    </div>
  }
}

export default Amenity;