import * as React from 'react';
import Header from '../components/header';
import '../styles/Results.scss';
import CardFlight from '../components/cardFlight/cardFlight';

class Results extends React.Component {
  render(){
  return (
    <div>
      <Header />
      <div className='search-container'>
        <div className='cards-container'>
          <CardFlight />
        </div>
        <div className='resume-container'></div>
      </div>
    </div>
  );
}}

export default Results;