import TalentProp from "./TalentsProp";
import './TalentDetails-1.css'
import { useEffect } from 'react'
import "aos/dist/aos.css"; 
import AOS from "aos";

const TalentDetails_1 = () => {
      useEffect(() => {
             AOS.init({ duration: 1000, once: true }); 
              }, []);
    return (  
        <div className="talent-details-1">
            <div className="talent-first-container" data-aos="fade-right" data-aos-delay="300">
                <div className="talent-first">
                    <TalentProp name='Getting Started' details='lorem ipsum dolor sir amet consectetur.
                    sit curabitur nulla justo tellus amet.'/>
                </div>
                <div className="talent-first">
                    <TalentProp name='Getting Started' details='lorem ipsum dolor sir amet consectetur.
                    sit curabitur nulla justo tellus amet.'/>
                </div>
                <div className="talent-first">
                    <TalentProp name='Getting Started' details='lorem ipsum dolor sir amet consectetur.
                    sit curabitur nulla justo tellus amet.'/>
                </div>
                <div className="talent-first">
                    <TalentProp name='Getting Started' details='lorem ipsum dolor sir amet consectetur.
                    sit curabitur nulla justo tellus amet.'/>
                </div>
            </div>
            <div className="talent-first-container" data-aos="fade-right" data-aos-delay="300">
            <div className="talent-first">
                    <TalentProp name='Getting Started' details='lorem ipsum dolor sir amet consectetur.
                    sit curabitur nulla justo tellus amet.'/>
                </div>
                <div className="talent-first">
                    <TalentProp name='Getting Started' details='lorem ipsum dolor sir amet consectetur.
                    sit curabitur nulla justo tellus amet.'/>
                </div>
                <div className="talent-first">
                    <TalentProp name='Getting Started' details='lorem ipsum dolor sir amet consectetur.
                    sit curabitur nulla justo tellus amet.'/>
                </div>
                <div className="talent-first">
                    <TalentProp name='Getting Started' details='lorem ipsum dolor sir amet consectetur.
                    sit curabitur nulla justo tellus amet.'/>
                </div>
            </div>
        </div>
    );
}
 
export default TalentDetails_1;