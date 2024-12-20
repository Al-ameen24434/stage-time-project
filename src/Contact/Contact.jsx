import NavBar from "../NavBar/NavBar";
import './Contact.css'
import Contactcomp_1 from "./contactComponents/ContactComp-1";
import { useEffect } from 'react'
import "aos/dist/aos.css"; 
import AOS from "aos";


const Contacts = () => {
    useEffect(() => {
        // Initialize AOS conditionally based on screen size using ternary operator
        window.innerWidth <= 768 
            ? AOS.init({ disable: true })  // Disable AOS for mobile
            : AOS.init({ duration: 1000, once: true });  // Enable AOS for larger screens

    }, []);
    return ( 
        <div className="contacts"> 
            <div className="contact-top">
                <div className="contact-top-nav">
                    <NavBar/>
                </div>
                <div className="contact-top-info" >
                    <h1 data-aos="fade-up" data-aos-delay="300">You've got vital info for us?</h1>
                    <p data-aos="fade-up" data-aos-delay="500">Do well and reach out to us </p>
                    <button data-aos="fade-up" data-aos-delay="700">Contact Us</button>
                </div>
            </div>
            <  Contactcomp_1/>
           
           
        </div>
    
    );
}
 
export default Contacts;