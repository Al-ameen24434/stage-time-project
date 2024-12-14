import ThirdHome from "../Home/HomeComponents/ThirdHome";
import NavBar from "../NavBar/NavBar";
import './About.css'

const About = () => {
    return ( 
        <>
        <div className="about-body">
            <NavBar/>
            <h1>About Us</h1>
        </div>
        <ThirdHome/>
        </>
     );
}
 
export default About;