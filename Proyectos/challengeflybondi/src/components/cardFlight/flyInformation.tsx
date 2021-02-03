import * as React from 'react';
import '../../styles/CardFlight.scss'

class FlyInformation extends React.Component{
  render(){

    const date = <span className='date'>Miercoles 19 de Junio de 2021</span> 

    const dapartureArrival = <div className='departure-arrival'>
    <div className='column'>
      <span className='time'>08:30</span>
      <span className='city'>Buenos Aires</span>
      <span className='airpot'>EZE</span>
    </div>
    <div className='flight-time'>
      <span></span>
      <span className='duration'>04hs 00min</span>
      <span className='flight-code'>FO45GT</span>
    </div>
    <div className='column right'>
      <span className='time'>12:30</span>
      <span className='city'>Bariloche</span>
      <span className='airpot'>BRC</span>
    </div>
    </div>

    return <div className='fly-information'>
            {date}
            {dapartureArrival}
          </div>
  }
}

export default FlyInformation;