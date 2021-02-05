import * as React from 'react';
import '../../styles/SelectPackage.scss';
import DropDown from '../buttons/dropDown';
import SaleBrand from '../saleBrand';

interface IPackageHeader{
  onClickHandler: any; 
} 

class PackageHeader extends React.Component<IPackageHeader>{
  render(){
    return <div className='package-header'>
    <div className='package-selected'>
      <p>Pack Viajero Light</p>
      <SaleBrand discount={15} />
    </div>
      <DropDown style='btn-show-packages' text='Cambiar Pack' onClickHandler={this.props.onClickHandler}/>
  </div>
  }
}

export default PackageHeader;