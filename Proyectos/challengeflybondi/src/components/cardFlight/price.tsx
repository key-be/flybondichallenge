import * as React from 'react';
import '../../styles/CardFlight.scss'
import GeneralButton from '../buttons/generalButton';
import fire from '../../assets/icons/icon - 16 - fire.svg'

class Price extends React.Component{
  render(){
    return <div className='price'>
      <div className='btn-box'>
        <span>Tarifa Base</span>
        <GeneralButton 
          style='btn-price'
          text='1.650'
          icon='$'
        />
      </div>
      <div className='stock'><img src={fire} alt=""/><p className='stock'>¡Últimos 3 disponibles!</p></div>
    </div>
      
  }
} 

export default Price;