import Scroll from "../../assets/Gallery Scroll.png"
import { useEffect } from "react";
import './ForthHome.css'
import "aos/dist/aos.css"; 
import AOS from "aos";




const ForthHome = () => {
    useEffect(() => {
              AOS.init({ duration: 1000, once: true }); 
            }, []);
    return ( 
        <div className="forth-home" data-aos="fade-up" data-aos-delay="100">
            <img src={Scroll} alt="Gallery scroll" />
        </div>
     );
}
 
export default ForthHome;