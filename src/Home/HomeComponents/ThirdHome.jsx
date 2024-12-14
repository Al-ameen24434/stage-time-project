
import AriseHealth from "../../assets/Logo Wrapper.png"
import Ephicient from "../../assets/Logo Wrapper (1).png"
import TwentyTwentyInc from "../../assets/Logo Wrapper (2).png"
import The_Paak from "../../assets/Logo Wrapper (3).png"
import PipeLinks from "../../assets/Logo Wrapper (4).png"
import Toogether from "../../assets/Logo Wrapper (5).png"

import './ThirdHome.css'





const ThirdHome = () => {
    return ( 
        <div className="third-home">
            <div className="third-home-header">
                <h1>Our Partners</h1>
                <p>People who have trust in us</p>
            </div>
            <div className="third-home-content">
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