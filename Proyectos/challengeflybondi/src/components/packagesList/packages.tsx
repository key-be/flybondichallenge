import * as React from 'react';
import '../../styles/cardFlight/SelectPackage.scss';
import SaleBrand from '../saleBrand';
import Amenities from './amenities';

class Packages extends React.Component{
  render(){
    return <div className='packages-list'>
        <div className='column'>
          <div  className='package'><p>Liviano</p></div>
          <Amenities btnPrice='1.250' />
        </div>
        <div className='column'>
          <div  className='package'><p>Viajero Light</p><SaleBrand discount='15% OFF' /></div>
          <Amenities btnPrice='1.650' />
        </div>
        <div className='column'>
          <div  className='package'><p>Viajero Pro</p><SaleBrand discount='20% OFF' /></div>
          <Amenities btnPrice='1.860' /> 
        </div>
    </div>
  }
}

export default Packages;