import * as React from 'react';
import Tarifa from '../../assets/icons/Tarifa.svg'
import EquipajeMano from '../../assets/icons/EquipajeMano.svg'
import Asiento from '../../assets/icons/Asiento.svg'
import CarryOn from '../../assets/icons/CarryOn.svg'
import Valija from '../../assets/icons/Valija.svg'
import Amenity from './amenity';

export type AmenityTypes = 'tarifa' | 'equipaje' | 'asiento' | 'carryOn' | 'valija'

interface IAmenitiesProps{
  amenities: AmenityTypes[]
}

class Amenities extends React.Component <IAmenitiesProps>{
  render(){
    return <div>
      <Amenity icon={Tarifa} text='Tarifa aerea' hideItem={!this.props.amenities.includes('tarifa')}/>
      <Amenity icon={EquipajeMano} text='Equipaje de mano' hideItem={!this.props.amenities.includes('equipaje')}/>
      <Amenity icon={Asiento} text='Asiento preferencial' hideItem={!this.props.amenities.includes('asiento')}/>
      <Amenity icon={CarryOn} text='Carry on' subText='de hasta 9k'hideItem={!this.props.amenities.includes('carryOn')} />
      <Amenity icon={Valija} text='Valija' subText='de hasta 20k' hideItem={!this.props.amenities.includes('valija')}/>
  </div>
  }
}

export default Amenities;