import NavBar from "../NavBar/NavBar";
import './Events.css'
import { useEffect } from 'react'
import "aos/dist/aos.css"; 
import AOS from "aos";


const Events = () => {
    useEffect(() => {
        // Initialize AOS conditionally based on screen size using ternary operator
        window.innerWidth <= 768 
            ? AOS.init({ disable: true })  // Disable AOS for mobile
            : AOS.init({ duration: 1000, once: true });  // Enable AOS for larger screens

    }, []);
    return (
        <div className="events">
            <div className="top-events">
                <NavBar/>
                <h1 data-aos="fade-up" data-aos-delay="300">Book an Event with us</h1>
            </div>
            <div className="first-event">
               
            </div>
        </div>
      );
}
 
export default Events;