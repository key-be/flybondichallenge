import * as React from 'react';
import '../../styles/cardFlight/CardFlight.scss'
import FlyInformation from './flyInformation';
import Price from './price';
import SelectPackage from '../packagesList/selectPackage';

class CardFlight extends React.Component{
  render(){
    return <div className='card-flight-container'> 
    <div className='card'>
        <FlyInformation />
        <Price />
      </div>
      <SelectPackage />
      </div>
  }
}

export default CardFlight;