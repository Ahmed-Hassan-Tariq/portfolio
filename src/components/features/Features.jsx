import React from 'react';
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
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra tellus enim, ut pulvinar nunc luctus non. Aliquam placerat, elit lobortis euismod semper, sem sem bibendum libero, quis tincidunt risus turpis non elit. Proin nulla velit, laoreet sed malesuada sed, ultrices et turpis. Nunc feugiat lectus nisl, eu bibendum erat scelerisque in. Aenean sodales enim quis commodo cursus. Proin nec urna consequat, congue dolor in, ornare risus. Pellentesque et diam id lacus efficitur dictum vitae id lectus. Aliquam congue sem sed nunc consequat mollis. Cras rhoncus et quam ut hendrerit. Mauris aliquet viverra ultricies. Cras nisl metus, dapibus non mattis vel, ornare id diam. Nulla facilisi. Morbi eu pulvinar nunc, luctus ultricies diam. Cras viverra sapien leo, vulputate euismod felis condimentum ac. Sed sit amet ornare urna.</p>
    <div className='info'>
     <div className='information_name'> <h2>Name</h2> <a1>Ahmed Hassan</a1> </div>
     <div className='information_phone'><h2>Phone</h2> <a1>+** *** *******</a1> </div>
     <div className='information_country'> <h2>Country</h2><a1>Pakistan</a1> </div>
     <div className='information_email'><h2>Email</h2> <a1>*****@gmail.com</a1></div>
     
    </div>
    <div className='info_icons'> <h2>Education</h2>
    
    <a1>BSCS</a1>
    <div className='info_icons_sizing'>
    <a href="https://www.instagram.com/ahmedhassantariq/" target="_blank" rel='noreferrer' ><SiInstagram  color='#ffffff' size={icon_size} /></a>
    <a href="https://www.facebook.com/ahmedhassantariq00" target="_blank" rel='noreferrer'><SiFacebook color='#ffffff' size={icon_size} /></a>
    <a href="https://twitter.com/ahmed_tariq00" target="_blank" rel='noreferrer'><SiTwitter color='#ffffff' size={icon_size} /></a>
    <a href="https://www.pinterest.com/ahmedhassan00" target="_blank" rel='noreferrer'><SiPinterest color='#ffffff' size={icon_size} /></a>

    </div>
    </div>
    </div>
    </div>
    

</div>
  )
}

export default Features;