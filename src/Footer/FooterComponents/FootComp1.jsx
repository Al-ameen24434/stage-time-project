import './FootComp1.css';
import { useEffect } from 'react'
import "aos/dist/aos.css"; 
import AOS from "aos";


const FootComp1 = () => {
        useEffect(() => {
                      AOS.init({ duration: 1000, once: true }); 
                    }, []);
    return ( 
        <div className="foot-comp-1" data-aos="fade-right" data-aos-delay="400">
            <h1>Subcribe to our Newsletter</h1>
            <p>Join our mailing list to get the latest  news</p>
            <div className="foot-comp-1-input">
                <input type="text" placeholder='enter your email'/>
                <button>subscribe</button>
            </div>
        </div>
     );
}
 
export default FootComp1;