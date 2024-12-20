import AccordionExample from "./AccordionComp";
import './TalentDetails-2.css';
import { useEffect } from 'react'
import "aos/dist/aos.css"; 
import AOS from "aos";


const TalentDetails_2 = () => {
       useEffect(() => {
             AOS.init({ duration: 1000, once: true }); 
              }, []);
    return ( 
        <div className="talent-details-2" data-aos="fade-up" data-aos-delay="300">
            <h1>Frequently asked questions</h1>
            <AccordionExample/>
        </div>
     );
}
 
export default TalentDetails_2;