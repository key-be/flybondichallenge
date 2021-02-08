import * as React from 'react';
import '../../styles/CardFlight.scss'
import FlyInformation from './flyInformation';
import Price from './price';
import PackageHeader from '../packagesBox/packagesHeader';
import Packages from '../packagesBox/packages';

class CardFlight extends React.Component{
  state ={
    showPackages: false,
    selectedPackage: null
  }

  render(){
    return <div className='card-flight-container'> 
      <div className='card'>
        <FlyInformation />
        <Price price={(this.state.selectedPackage as any)?.price}/>
      </div>
      <div className='select-package'> 
      <PackageHeader  
        onClickHandler={() => this.setState({showPackages: !this.state.showPackages})}
      />
      {
        this.state.showPackages && 
      <div className='packages-container'>
        <div className='call-to-action'>
          <h3>¡Comprá el pack que más se ajuste a tu viaje!</h3>
          <p>Comprando ahora tu pack ahorras hasta un 20% en tu pasaje</p>
        </div>
        <Packages 
          selectedPackage={(this.state.selectedPackage as any)?.id}
          onSelectPackage={(p: any) => this.setState({selectedPackage: p})}
        />
      </div>
      }
    </div>
      </div>
  }
}

export default CardFlight;