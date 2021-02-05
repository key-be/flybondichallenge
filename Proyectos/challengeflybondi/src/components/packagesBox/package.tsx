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
}

class Package extends React.Component<IPackage>{
  render(){
    return <div className='package'>
      <div className='package-name'>
        <p>{this.props.name}</p>
        {this.props.discount && <SaleBrand discount={this.props.discount} />} 
      </div>
      <Amenities amenities={this.props.amenities || []}/>
      <GeneralButton style='btn-pack' text={this.props.price} icon='$'/>
    </div>
  }
}

export default Package;