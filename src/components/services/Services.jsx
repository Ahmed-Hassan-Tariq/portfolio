import React from 'react'
import {Servicebox1, Servicebox2, Servicebox3, Servicebox4, Servicebox5, Servicebox6} from './Servicebox';
import './services.css';

const Services = () => {
  return (
    <div className='services_content' id='services'>
    <h1>SERVICES</h1>
    <div className='services_boxes'>
   <div className='box_hover'><Servicebox1 headline={"Graphic Design"} paragraph={"One of my services that i provide for free along with other useful tasks."} /></div>
   <div className='box_hover'><Servicebox2 headline={"Video Editing"} paragraph={"One of my services that i provide for free along with other useful tasks."} /></div>
   <div className='box_hover'><Servicebox3 headline={"Music Production"} paragraph={"One of my services that i provide for free along with other useful tasks."} /></div>
   <div className='box_hover'><Servicebox4 headline={"Database"} paragraph={"One of my services that i provide for free along with other useful tasks."} /></div>
   <div className='box_hover'><Servicebox5 headline={"Web Design"} paragraph={"One of my services that i provide for free along with other useful tasks."} /></div>
   <div className='box_hover'> <Servicebox6 headline={"Model Training"} paragraph={"One of my services that i provide for free along with other useful tasks."} /></div>

    </div>



    </div>

  )
}

export default Services;