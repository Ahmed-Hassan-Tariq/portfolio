import React, {useState} from 'react';
import { RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import './navbar.css';

const Menu = () =>  (
  <>
  <p><a href="#home"> HOME </a></p>
  <p><a href="#about-me"> ABOUT ME </a></p>
  <p><a href="#skills"> SKILLS </a></p>
  <p><a href="#services"> SERVICES </a></p>
  <p><a href="#portfolio"> PORTFOLIO </a></p>
</>
)



const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (<div className='gpt3__navbar'>
  <div className='gpt3__navbar-links'>
<div className='gpt3__navbar-links_logo'>

  </div>
  <div className='gpt3__navbar-links_container'>
    <Menu/>
  </div>
 </div>

 <div className='gpt3__navbar-menu'>
  {toggleMenu
    ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
    : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
  }
  {toggleMenu && (
    <div className='gpt3__navbar-menu_container scale-up-center'>
    <div className='gpts__navbar-menu_container-links'></div>
    <div className='div-color'>
     <Menu/>
     </div>
     <div className='gpt3__navbar-menu_contauiner-links-sign'> </div>
     </div>
  )}

 </div>
</div>
  )
}

export default NavBar;