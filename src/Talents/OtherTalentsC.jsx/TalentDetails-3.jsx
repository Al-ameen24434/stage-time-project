import teamImage from '../../assets/Frame 49.png'
import './TalentDetails-3.css'
import { useEffect } from 'react'
import "aos/dist/aos.css"; 
import AOS from "aos";

const TalentDetails_3 = () => {
     useEffect(() => {
                 AOS.init({ duration: 1000, once: true }); 
                  }, []);
    return ( 
        <div className="talent-details-3">
            <div className="talent-details-3a">
                <h1  data-aos="fade-up" data-aos-delay="300"> Didn't find what you are looking for?</h1>
                <p  data-aos="fade-up" data-aos-delay="400">Our team is active to attend to your mail
                </p>
            </div>

            <div className="talent-details-3b"  data-aos="fade-up" data-aos-delay="600">
                <img src={teamImage} alt="team image" />
            </div>
            <div className="talent-details-3-button"  data-aos="fade-up" data-aos-delay="700">
                <button>Contact Us</button>
            </div>
        </div>
     );
}
 
export default TalentDetails_3;