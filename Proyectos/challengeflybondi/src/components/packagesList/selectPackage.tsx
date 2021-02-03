import * as React from 'react';
import '../../styles/cardFlight/SelectPackage.scss';
import ToggleButton from '../buttons/toogleButton';
import SaleBrand from '../saleBrand';
import Packages from './packages';

class SelectPackage extends React.Component{
  render(){
    
    const packagesContainer = 
    <div className='package-header'>
      <div className='package-selected'>
        <p>Pack Liviano</p>
        <SaleBrand discount="15% OFF" />
      </div>
      <div className='change-package'>
        <ToggleButton style='btn-show-packages' text='Cambiar Pack' />
      </div>
    </div>

    const callToAction =
    <div className='call-to-action'>
      <h3>¡Comprá el pack que más se ajuste a tu viaje!</h3>
      <p>Comprando ahora tu pack ahorras hasta un 20% en tu pasaje</p>
    </div>


    return <div className='select-package'> 
      {packagesContainer}
      <div className='packages-container'>
        {callToAction}
        <Packages />
      </div>
    </div>
  }
}

export default SelectPackage;