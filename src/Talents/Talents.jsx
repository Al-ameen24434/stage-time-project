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
        // Initialize AOS conditionally based on screen size using ternary operator
        window.innerWidth <= 768 
            ? AOS.init({ disable: true })  // Disable AOS for mobile
            : AOS.init({ duration: 1000, once: true });  // Enable AOS for larger screens

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