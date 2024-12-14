import teamImage from '../../assets/Frame 49.png'
import './TalentDetails-3.css'

const TalentDetails_3 = () => {
    return ( 
        <div className="talent-details-3">
            <div className="talent-details-3a">
                <h1>Didn't find what you are looking for?</h1>
                <p>Our team is active to attend to your mail
                </p>
            </div>

            <div className="talent-details-3b">
                <img src={teamImage} alt="team image" />
            </div>
            <div className="talent-details-3-button">
                <button>Contact Us</button>
            </div>
        </div>
     );
}
 
export default TalentDetails_3;