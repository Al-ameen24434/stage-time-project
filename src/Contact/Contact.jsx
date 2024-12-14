import NavBar from "../NavBar/NavBar";
import './Contact.css'
import Contactcomp_1 from "./contactComponents/ContactComp-1";



const Contacts = () => {
    return ( 
        <div className="contacts"> 
            <div className="contact-top">
                <div className="contact-top-nav">
                    <NavBar/>
                </div>
                <div className="contact-top-info">
                    <h1>You've got vital info for us?</h1>
                    <p>Do well and reach out to us </p>
                    <button>Contact Us</button>
                </div>
            </div>
            <Contactcomp_1/>
           
           
        </div>
    
    );
}
 
export default Contacts;