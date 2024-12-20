import { Link } from "react-router-dom";
import { useState } from "react"; 
import { IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu'; 
import CloseIcon from '@mui/icons-material/Close'; 
import './NavBar.css';
import { useEffect } from 'react'
import "aos/dist/aos.css"; 
import AOS from "aos";

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); 


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
     useEffect(() => {
              AOS.init({ duration: 1000, once: true }); 
            }, []);

    return ( 
        <div className="nav-bar" data-aos="fade-down" data-aos-delay="200">
            <div className="logo" data-aos="fade-right" data-aos-delay="200">
                <Link to='/'>
                    <h2>The <br />
                        <span className="next-gen">Next Gen </span><br />
                        <span className="show">Show</span>
                    </h2>
                </Link>
            </div>
            
            {/* Navigation Links */}
            <div className={ `nav-links ${isMenuOpen ? 'active' : ''}`} >
                <Link to='/about'>About us</Link>
                <Link to='/events'>Events</Link>
                <Link to='/talents'>Talents</Link>
                <Link to='/contact'>Contact</Link>
            </div>

            {/* Hamburger / Close Icon */}
            <div className="hamburger">
                <IconButton onClick={toggleMenu} edge="end" color="inherit">
                    {isMenuOpen ? <CloseIcon /> : <MenuIcon />} {/* Toggle between Menu and Close icons */}
                </IconButton>
            </div>

            {/* Join Us Button */}
            <div className={`nav-button ${isMenuOpen ? 'actives': ''}`}>
                <button>Join us</button>
            </div>
        </div>
    );
}

export default NavBar;
