import * as React from 'react';
import '../styles/SaleBrand.scss';

interface ISaleBrandProps{
  discount: number;
}

class SaleBrand extends React.Component <ISaleBrandProps>{
  render(){
    return <div className={`sale-container ${this.props.discount === 0 ? 'hiden-discount' : ' '}`}>
      {this.props.discount}%OFF</div>
  }
}

export default SaleBrand;