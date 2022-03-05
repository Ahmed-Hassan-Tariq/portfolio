import React from 'react'
import './contact.css';
import {BiMobileAlt, BiMapAlt, BiMailSend } from "react-icons/bi";
import Mailmodal from './Mailmodel';
const Contact = () => {
  return (
    <div className='contact_content' id='contact'>
    <h1>CONTACT ME</h1>
        <Mailmodal />

    <div className='container_div'>
        <div className='container_call'><BiMobileAlt color='#ffffff' size='25px' />  <h3>   Call Us On</h3> <a>+92 336 4042530</a>   </div>
        <div className='container_email'><BiMailSend color='#ffffff' size='25px' /> <h3>   Email Us At</h3> <a>atariq344@gmail.com</a>   </div>
        <div className='container_office'><BiMapAlt color='#ffffff' size='25px' /> <h3>   Visit Office</h3> <a>Pakistan</a></div>
      

    </div>
    </div>
  )
}

export default Contact;



