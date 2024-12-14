import NavBar from "../NavBar/NavBar";
import FirstHome from "./HomeComponents/FirstHome";
import './Home.css'
import HowItWorks from "./HomeComponents/SecondHome";
import ThirdHome from "./HomeComponents/ThirdHome";
import ForthHome from "./HomeComponents/ForthHome";
import FifthHome from "./HomeComponents/FifthHome";
import SixthHome from "./HomeComponents/sixthHome";
const Home = () => {
    return ( 
        <div className="home">
            <div className="first-home">
                <NavBar/>
                <FirstHome/>
                
            </div>
            <HowItWorks/>
            <ThirdHome/>
            <ForthHome/>
            <FifthHome/>
            <SixthHome/>
        </div>
     );
}
 
export default Home;