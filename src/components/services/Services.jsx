import React from 'react'
import {Servicebox1, Servicebox2, Servicebox3, Servicebox4, Servicebox5, Servicebox6} from './Servicebox';
import './services.css';

const Services = () => {
  return (
    <div className='services_content' id='services'>
    <h1>SERVICES</h1>
    <div className='services_boxes'>
   <div className='box_hover'><Servicebox1 headline={"Graphic Design"} paragraph={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} /></div>
   <div className='box_hover'><Servicebox2 headline={"Video Editing"} paragraph={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} /></div>
   <div className='box_hover'><Servicebox3 headline={"Music Production"} paragraph={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} /></div>
   <div className='box_hover'><Servicebox4 headline={"Database"} paragraph={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} /></div>
   <div className='box_hover'><Servicebox5 headline={"Web Design"} paragraph={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} /></div>
   <div className='box_hover'> <Servicebox6 headline={"Model Training"} paragraph={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} /></div>

    </div>



    </div>

  )
}

export default Services;