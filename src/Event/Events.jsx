import NavBar from "../NavBar/NavBar";
import './Events.css'
import { useEffect } from 'react'
import "aos/dist/aos.css"; 
import AOS from "aos";


const Events = () => {
  useEffect(() => {
 
         const handleResize = () => {
          
             window.innerWidth <= 768
                 ? (AOS.refresh(), AOS.init({ disable: true }))  
                 : (AOS.refresh(), AOS.init({ duration: 1000, easing: 'ease-out', once: true }));
         };
         handleResize();
         window.addEventListener('resize', handleResize);
 
         return () => window.removeEventListener('resize', handleResize);
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