import ThirdHome from "../Home/HomeComponents/ThirdHome";
import NavBar from "../NavBar/NavBar";
import './About.css'
import { useEffect } from 'react'
import "aos/dist/aos.css"; 
import AOS from "aos";


const About = () => {
     useEffect(() => {
     AOS.init({ duration: 1000, once: true }); 
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