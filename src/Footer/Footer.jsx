import FootComp1 from "./FooterComponents/FootComp1";
import FooterComp_2 from "./FooterComponents/FooterComp-2";
import { useEffect } from 'react'
import "aos/dist/aos.css"; 
import AOS from "aos";
const Footer = () => {
     useEffect(() => {
                  AOS.init({ duration: 1000, once: true }); 
                }, []);
    return ( 
     <div className="footer"data-aos="fade-up" data-aos-delay="100">
        <FootComp1 />
        <FooterComp_2 />

    </div> 
    );
}
 
export default Footer;