import * as React from 'react';
import '../../styles/SelectPackage.scss';
import Package from './package';

class Packages extends React.Component{
  render(){
    return <div className='packages-list'>
        <Package  
          name='Liviano' 
          price={1250} 
          amenities={['tarifa', 'equipaje']} 
        />
        <Package  
          name='Viajero light' 
          price={1650} 
          discount={15}
          amenities={['tarifa', 'equipaje', 'asiento', 'carryOn']}
        />
        <Package 
          name='Viajero pro' 
          price={1850} 
          discount={20}
          amenities={['tarifa', 'equipaje', 'asiento', 'carryOn', 'valija']}
        />
    </div>
  }
}

export default Packages;