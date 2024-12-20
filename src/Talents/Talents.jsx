import NavBar from "../NavBar/NavBar";
import TalentDetails_1 from "./OtherTalentsC.jsx/TalentDetails-1";
import TalentDetails_2 from "./OtherTalentsC.jsx/TalentDetails-2";
import TalentDetails_3 from "./OtherTalentsC.jsx/TalentDetails-3";
import SearchWithIcon from "./SearchComp";
import './Talents.css';
import { useEffect } from 'react';
import "aos/dist/aos.css"; 
import AOS from "aos";
const Talents = () => {
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
        <div className="talents">
            <div className="talent-top">
                <NavBar/>
                <div className="talent-top-head" data-aos="fade-up" data-aos-delay="200">
                    <h1>How can we help you?</h1>
                    <SearchWithIcon/>
                </div>
            </div>
            <TalentDetails_1/>
            <TalentDetails_2/>
            <TalentDetails_3/>
        </div>
     );
}
 
export default Talents;