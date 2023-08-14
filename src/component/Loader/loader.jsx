import React from 'react';
import Spin from '../image/spinner.gif';
import './loader.css';


export default function Loader() {
  return (
    <div className='text-center spineer_area'>
      <img src={Spin} className='img-fluid' alt='Loading....'/>
    </div>
  )
}