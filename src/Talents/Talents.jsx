import NavBar from "../NavBar/NavBar";
import TalentDetails_1 from "./OtherTalentsC.jsx/TalentDetails-1";
import TalentDetails_2 from "./OtherTalentsC.jsx/TalentDetails-2";
import TalentDetails_3 from "./OtherTalentsC.jsx/TalentDetails-3";
import SearchWithIcon from "./SearchComp";
import './Talents.css'
const Talents = () => {
    return ( 
        <div className="talents">
            <div className="talent-top">
                <NavBar/>
                <div className="talent-top-head">
                    <h1>How can we help you?</h1>
                    <SearchWithIcon/>
                </div>
            </div>
            <TalentDetails_1/>
            <TalentDetails_2/>
            <TalentDetails_3/>
        </div>
     );
}
 
export default Talents;