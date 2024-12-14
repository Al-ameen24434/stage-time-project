import { Link } from "react-router-dom";
import { useState } from "react"; // For managing the menu state
import { IconButton } from "@mui/material"; // Material UI IconButton
import MenuIcon from '@mui/icons-material/Menu'; // Hamburger icon
import CloseIcon from '@mui/icons-material/Close'; // Close icon (X)
import './NavBar.css';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle menu visibility

    // Toggle the mobile menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return ( 
        <div className="nav-bar">
            <div className="logo">
                <Link to='/'>
                    <h2>The <br />
                        <span className="next-gen">Next Gen </span><br />
                        <span className="show">Show</span>
                    </h2>
                </Link>
            </div>
            
            {/* Navigation Links */}
            <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
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
