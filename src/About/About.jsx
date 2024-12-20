import ThirdHome from "../Home/HomeComponents/ThirdHome";
import NavBar from "../NavBar/NavBar";
import './About.css'
import { useEffect } from 'react'
import "aos/dist/aos.css"; 
import AOS from "aos";


const About = () => {
    useEffect(() => {
        // Initialize AOS conditionally based on screen size using ternary operator
        window.innerWidth <= 768 
            ? AOS.init({ disable: true })  // Disable AOS for mobile
            : AOS.init({ duration: 1000, once: true });  // Enable AOS for larger screens

    }, []);
    return ( 
        <>
        <div className="about-body">
            <NavBar/>
            <h1 data-aos="fade-up" data-aos-delay="300">About Us</h1>
        </div>
        <ThirdHome/>
        </>
     );
}
 
export default About;