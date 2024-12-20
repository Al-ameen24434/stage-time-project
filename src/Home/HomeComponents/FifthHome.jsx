
import './FifthHome.css'
import cardImage_1 from "../../assets/Image.png"
import cardImage_2 from "../../assets/Image (1).png"
import cardImage_3 from "../../assets/Image (2).png"
import Card_1 from "./Card1.jsx"
import { useEffect } from 'react'
import "aos/dist/aos.css"; 
import AOS from "aos";
const FifthHome = () => {
      useEffect(() => {
              AOS.init({ duration: 1000, once: true }); 
            }, []);
    return ( 
        <div className="active-cards" data-aos="fade-up" data-aos-delay="100">
            <h1>What people say about us</h1>
            <div className="available-cards" data-aos="fade-right" data-aos-delay="300">
                <Card_1 details='"Amet minim molit non deserunt ullamco est sit aliqua dolor do amet sint. velit
                officia consequat duis enin  velit molit. Exercitation veniam consequat."'
                name='Emmanuel J' speciality='photographer' image={cardImage_1}
                />
                <Card_1 details='"Amet minim molit non deserunt ullamco est sit aliqua dolor do amet sint. velit
                officia consequat duis enin  velit molit. Exercitation veniam consequat."'
                name='John Woods' speciality='Software Engineer' image={cardImage_2}
                />
                <Card_1 details='"Amet minim molit non deserunt ullamco est sit aliqua dolor do amet sint. velit
                officia consequat duis enin  velit molit. Exercitation veniam consequat."'
                name='Sidwell Mako' speciality='Artist' image={cardImage_3}
                />
            </div>
        </div>
     );
}
 
export default FifthHome;