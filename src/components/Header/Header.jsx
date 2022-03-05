import { Button } from '@mui/material';
import React from 'react'
import './header.css';




function Header() {
  return (
      <div className='head_content' id='home'>
      <a>I'm a</a>
      <a1>Web Developer.</a1>
      <div className='button_check'  ><a href='#contact'>
      <Button  variant="contained" border="none" radius="none"  ><a2 >CONTACT ME</a2></Button></a></div>
    
    </div> 
  );
}

export default Header;