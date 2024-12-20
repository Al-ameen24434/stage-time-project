import Card_2 from "./Card-2";
import VectorStyle from "../../assets/Vector 1.png";
import cardImg_1 from "../../assets/Rectangle 4.png";
import cardImg_2 from "../../assets/Rectangle 5.png";
import cardImg_3 from "../../assets/Rectangle 6.png";
import './SixthHome.css'
import { useEffect } from 'react'
import "aos/dist/aos.css"; 
import AOS from "aos";
const SixthHome = () => {
          useEffect(() => {
                  AOS.init({ duration: 1000, once: true }); 
                }, []);
    return ( 
    <div className="sixth-home-content">
        <div className="our-blog" data-aos="fade-right" data-aos-delay="100">
            <h1>Our Blog</h1>
            <p>Lorem, ipsum dolor sit amet consectetur. <br />sit curabitur nulla justo tellus amet.</p>
            <img src={VectorStyle} alt="vector-style" />
        </div>
        <div className="card-22" data-aos="fade-up" data-aos-delay="300">
            <Card_2 h3='Lorem Ipsum' Ptag='26th June'
            card2Image={cardImg_1}/>
            <Card_2 h3='Lorem Ipsum' Ptag='26th June'
            card2Image={cardImg_2}/>
            <Card_2 h3='Lorem Ipsum' Ptag='26th June'
            card2Image={cardImg_3}/>
        </div>
    </div>
     );
}
 
export default SixthHome;