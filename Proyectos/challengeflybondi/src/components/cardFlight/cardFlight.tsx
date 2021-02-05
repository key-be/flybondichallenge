import * as React from 'react';
import '../../styles/CardFlight.scss'
import FlyInformation from './flyInformation';
import Price from './price';
import PackageContainer from '../packagesBox/packageContainer';

class CardFlight extends React.Component{
  render(){
    return <div className='card-flight-container'> 
      <div className='card'>
        <FlyInformation />
        <Price />
      </div>
        <PackageContainer />
      </div>
  }
}

export default CardFlight;