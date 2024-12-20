import ThirdHome from "../Home/HomeComponents/ThirdHome";
import NavBar from "../NavBar/NavBar";
import './About.css'
import { useEffect } from 'react'
import "aos/dist/aos.css"; 
import AOS from "aos";


const About = () => {
   useEffect(() => {
    if (window.innerWidth >= 768) {
      AOS.init({
        duration: 1200, // Duration of the animation
        easing: 'ease-in-out', // Easing function
        offset: 200, // Trigger the animation a little before it's in view
      });
    } else {
      AOS.init({
        disable: true, // Disable animations on mobile devices
      });
    }
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