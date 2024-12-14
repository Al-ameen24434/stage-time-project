import Card_2 from "./Card-2";
import VectorStyle from "../../assets/Vector 1.png";
import cardImg_1 from "../../assets/Rectangle 4.png";
import cardImg_2 from "../../assets/Rectangle 5.png";
import cardImg_3 from "../../assets/Rectangle 6.png";
import './SixthHome.css'
const SixthHome = () => {
    return ( 
    <div className="sixth-home-content">
        <div className="our-blog">
            <h1>Our Blog</h1>
            <p>Lorem, ipsum dolor sit amet consectetur. <br />sit curabitur nulla justo tellus amet.</p>
            <img src={VectorStyle} alt="vector-style" />
        </div>
        <div className="card-22">
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