import React, { useState } from 'react';
import './NavBar.css';
import Logo from '../../img/logo.png'
import { Link } from 'react-scroll';
import ContactIcon from '../../img/ContactIcon.gif';
import menu from '../../img/menu.png';
const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className='navbar'>
        <img className='logoImg' src={ Logo } alt='Logo CV'/>
        <div className='menu'>
            <Link activeClass='active1' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='menuList'>Home</Link>
            <Link activeClass='active1' to='about' spy={true} smooth={true} offset={-80} duration={500} className='menuList'>About</Link>
            <Link activeClass='active1' to='portfolio' spy={true} smooth={true} offset={-80} duration={500} className='menuList'>Portfolio</Link>
        </div>
        <button className='menuBtn' onClick={()=>{document.getElementById('contact').scrollIntoView({behavior: 'smooth'});}}>
            <img className='menuBtnIcon' src={ ContactIcon } alt='Contact me icon'/>
            Contact me</button>
        {/* Mobile nav */}
        <img className='mobMenu' src={ menu } alt='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
        <div className='navMenu' style={{display: showMenu? 'flex' : 'none'}}>
            <Link activeClass='active2' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='navlist' onClick={()=>setShowMenu(false)}>Home</Link>
            <Link activeClass='active2' to='about' spy={true} smooth={true} offset={-80} duration={500} className='navlist' onClick={()=>setShowMenu(false)}>About</Link>
            <Link activeClass='active2' to='portfolio' spy={true} smooth={true} offset={-80} duration={500} className='navlist' onClick={()=>setShowMenu(false)}>Portfolio</Link>
            <Link activeClass='active2' to='contact' spy={true} smooth={true} offset={-80} duration={500} className='navlist' onClick={()=>setShowMenu(false)}>Contact</Link>
        </div>
    </nav>
  )
}

export default NavBar