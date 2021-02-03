import * as React from 'react';
import '../../styles/cardFlight/SelectPackage.scss';
import Tarifa from '../../assets/icons/Tarifa.svg'
import EquipajeMano from '../../assets/icons/EquipajeMano.svg'
import Asiento from '../../assets/icons/Asiento.svg'
import CarryOn from '../../assets/icons/CarryOn.svg'
import Valija from '../../assets/icons/Valija.svg'
import GeneralButton from '../buttons/generalButton';

interface IAmenitiesProps{
  btnPrice: string;
}

class Amenities extends React.Component <IAmenitiesProps>{
  render(){
    return <div className='amenities'>
    <div className='item'>
      <span><img src={Tarifa} alt=''></img></span>
      <p>Tarifa aerea</p>
    </div>
    <div className='item'>
      <span><img src={EquipajeMano} alt=''></img></span>
      <p>Equipaje de mano</p>
    </div>
    <div className='item'>
      <span><img src={Asiento} alt=''></img></span>
      <p>Asiento preferencial</p>
    </div>
    <div className='item'>
      <span><img src={CarryOn} alt=''></img></span>
      <p>Carry on <br /><span>de hasta 9k</span></p>
    </div>
    <div className='item'>
      <span><img src={Valija} alt=''></img></span>
      <p>Valija <br /><span>de hasta 9k</span></p>
    </div>
    <GeneralButton style='btn-pack' price={this.props.btnPrice} />
  </div>
  }
}

export default Amenities;