import * as React from 'react';
import '../styles/SaleBrand.scss';

interface ISaleBrandProps{
  discount: string;
}

class SaleBrand extends React.Component <ISaleBrandProps>{
  render(){
    return <div className='sale-container'>{this.props.discount}</div>
  }
}

export default SaleBrand;