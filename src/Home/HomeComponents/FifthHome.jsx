import Card_1 from "./card-1";
import './FifthHome.css'
import cardImage_1 from "../../assets/image.png"
import cardImage_2 from "../../assets/image (1).png"
import cardImage_3 from "../../assets/image (2).png"
const FifthHome = () => {
    return ( 
        <div className="active-cards">
            <h1>What people say about us</h1>
            <div className="available-cards">
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