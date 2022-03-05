import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import{ init } from '@emailjs/browser';
import {Button} from '@mui/material';
import './contactus.css';
init("fln28FJerLLlkswdw");

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_q6thjcy', 'template_pdjyzm8', form.current, 'fln28FJerLLlkswdw')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form className='email_form' ref={form} onSubmit={sendEmail}>
      <label className='email_name'>Name</label>
      <input placeholder='Enter name' class="no-outline" type="text" name="user_name" />
      <label className='email_mail'>Email</label>
      <input placeholder='Enter email' type="email" name="user_email" />
      <label className='email_message'> Message</label>
      <textarea rows={7} placeholder='Message here' name="message" />
      <Button type="submit" value="Send" variant="contained" border="none" radius="none">SEND</Button>
    </form>
  );
};
export default ContactUs;