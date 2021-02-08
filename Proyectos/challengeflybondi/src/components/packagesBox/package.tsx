import * as React from 'react';
import '../../styles/SelectPackage.scss';
import GeneralButton from '../buttons/generalButton';
import SaleBrand from '../saleBrand';
import Amenities, { AmenityTypes } from './amenities';

interface IPackage{
  name: string;
  discount?: number; 
  price: number;
  amenities: AmenityTypes[];
  selected: boolean;
  onSelectPackage: Function;
}

class Package extends React.Component<IPackage>{
  render(){
    return <div className='package'>
      <div className='package-name'>
        <p>{this.props.name}</p>
        {this.props.discount && <SaleBrand discount={this.props.discount} />} 
      </div>
      <Amenities amenities={this.props.amenities || []}/>
      <GeneralButton 
        style={`btn-pack ${this.props.selected ? 'btn-pack-selected' : ''}`} 
        text={this.props.price} 
        icon='$' 
        handleClick={() => this.props.onSelectPackage?.()}/>
    </div>
  }
}

export default Package;