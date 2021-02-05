import * as React from 'react';
import '../../styles/SelectPackage.scss';
import Packages from './packages';
import PackageHeader from './packagesHeader';

class PackageContainer extends React.Component{
 state ={
   showPackages: false
 }

  render(){
    return <div className='select-package'> 
      <PackageHeader  onClickHandler={() => this.setState({showPackages: !this.state.showPackages})}/>
      {
        this.state.showPackages && 
      <div className='packages-container'>
        <div className='call-to-action'>
          <h3>¡Comprá el pack que más se ajuste a tu viaje!</h3>
          <p>Comprando ahora tu pack ahorras hasta un 20% en tu pasaje</p>
        </div>
        <Packages />
      </div>
      }
    </div>
  }
}

export default PackageContainer;