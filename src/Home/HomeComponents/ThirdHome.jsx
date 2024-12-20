import { useEffect } from "react"
import AriseHealth from "../../assets/Logo Wrapper.png"
import Ephicient from "../../assets/Logo Wrapper (1).png"
import TwentyTwentyInc from "../../assets/Logo Wrapper (2).png"
import The_Paak from "../../assets/Logo Wrapper (3).png"
import PipeLinks from "../../assets/Logo Wrapper (4).png"
import Toogether from "../../assets/Logo Wrapper (5).png"
import "aos/dist/aos.css"; 
import AOS from "aos";
import './ThirdHome.css'





const ThirdHome = () => {
     useEffect(() => {
          AOS.init({ duration: 1000, once: true }); 
        }, []);
    return ( 
        <div className="third-home">
            <div className="third-home-header" data-aos="fade-up" data-aos-delay="100">
                <h1>Our Partners</h1>
                <p>People who have trust in us</p>
            </div>
            <div className="third-home-content" data-aos="fade-right" data-aos-delay="200">
                <img src={AriseHealth} alt="AriseHealth" />
                <img src={Ephicient} alt="Ephicient" />
                <img src={TwentyTwentyInc} alt="TwentyTwentyInc" />
                <img src={The_Paak} alt="The_Paak" />
                <img src={PipeLinks} alt="PipeLinks" />
                <img src={Toogether} alt="Toogether" />
            </div>
        </div>
     );
}
 
export default ThirdHome;