import * as React from 'react';
import { PACKAGES } from '../../constants/packages';
import '../../styles/SelectPackage.scss';
import Package from './package';

interface IPackages{
  onSelectPackage: Function;
  selectedPackage: number;
}


class Packages extends React.Component<IPackages>{
  render(){
    return <div className='packages-list'>
      {PACKAGES.map((p) => <Package  
          selected={this.props.selectedPackage === p.id}
          onSelectPackage={() => this.props.onSelectPackage(p)}
          name={p.name} 
          price={p.price} 
          discount={p.discount}
          amenities={p.amenities} 
          key={p.name}
        />)}
    </div>
  }
}

export default Packages;