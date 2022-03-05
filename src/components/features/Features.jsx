import React from 'react';
// import { SocialIcon } from 'react-social-icons';
import Izuku from '../../assets/Izuku.jpg';
import './features.css';
import {SiInstagram, SiFacebook, SiTwitter, SiPinterest } from "react-icons/si";

var icon_size=35;
const Features = () => {
  return (
    <div className="features_content" id='about-me'>
    <h1>ABOUT ME</h1>
    <div className='div_divider'>

    <div className='about_me_picture'>
    <img src={Izuku} alt='Izuku' />
    </div>


    <div className='about_me_content'>
    <a>I'm a Web Developer with ex
    perience of more than 10 years Line 8:5:  
    The href attribute is required for an anchor 
    to be keyboard accessible. Provide a valid, 
    navigable address as the href value. If you canno
    t provide an href, but still need the element to res
    emble a link, use a button 
    and change it with appropriate styles. Learn mor
    e: https://github.com/jsx-e
    slint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is
    -valid.md  jsx-a11y/anchor-is-valid</a>
    <div className='info'>
     <div className='information_name'> <h2>Name</h2> <a1>Ahmed Hassan</a1> </div>
     <div className='information_phone'><h2>Phone</h2> <a1>+92 336 4042530</a1> </div>
     <div className='information_country'> <h2>Country</h2><a1>Pakistan</a1> </div>
     <div className='information_email'><h2>Email</h2> <a1>atariq344@gmail.com</a1></div>
     
    </div>
    <div className='info_icons'> <h2>Education</h2>
    
    <a1> Currently in Computer Science <br/>program in COMSATS, Lahore</a1>
    <div className='info_icons_sizing'>
    <a3><SiInstagram color='#ffffff' size={icon_size} /></a3>
    <a3><SiFacebook color='#ffffff' size={icon_size} /></a3>
    <a3><SiTwitter color='#ffffff' size={icon_size} /></a3>
    <a3><SiPinterest color='#ffffff' size={icon_size} /></a3>
    

    
    </div>
    </div>
    </div>
    </div>
    

</div>
  )
}

export default Features