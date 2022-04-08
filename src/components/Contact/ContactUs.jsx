import React, { useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import{ init } from '@emailjs/browser';
import {Button} from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import './contactus.css';
init("fln28FJerLLlkswdw");

export const ContactUs = () => {
  const form = useRef();
  const notifywait = () => toast("Sending Email.");
  const notifyyes = () => toast("Email Sent.");
  const notifyno = () => toast("Error Occured. Try Again!");
  const [btn, setbtn] = useState(true);
  const sendEmail = (e) => {
    e.preventDefault();
    notifywait();
    emailjs.sendForm('service_q6thjcy', 'template_pdjyzm8', form.current, 'fln28FJerLLlkswdw')
      .then((result) => {
          notifyyes();
          setbtn(false);
      }, (error) => {
        notifyno();
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

      {btn ? (
      <Button type="submit" value="Send" variant="contained" border="none" radius="none">SEND</Button>
      ):(
        <Button type="submit" disabled value="Send" variant="contained" border="none" radius="none">SENT</Button>
      )
      }

      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
/>
    </form>
  );
};
export default ContactUs;