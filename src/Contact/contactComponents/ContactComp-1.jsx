import './ContactComp-1.css'




const Contactcomp_1 = () => {
    return ( 
        <div className="contact-details">
            <div className="first-contact-details">
                <div className="first-contact-details-a">
                    <h4>Phone</h4>
                    <p>+234 908 8867</p>    
                </div>
                <div className="first-contact-details-a">
                    <h4>Email</h4>
                    <p>help@thenextgenshow.com</p>    
                </div>
                <div className="first-contact-details-a">
                    <h4>Office</h4>
                    <p>78, Westhill Estate, Abuja</p>    
                </div>
            </div>
            <div className="second-contact-details">
                <div className="conts-head-1">
                    <h3>send us a message</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione odit amet.</p>
                </div>
                <div className="conts-head-1-firstName">
                    <input type="text" placeholder='First Name'/>
                    <input type="text" placeholder='Last Name' />
                </div>
                <div className="conts-head-1-email">
                    <input type="email" placeholder='Email Address'/>

                </div>
                <div className="conts-head-1-empty-space">
                    <textarea name="message" id="message" placeholder='Message'/>
                </div>
                <div className="conts-head-1-button">
                    <button>send message</button>
                </div>
            </div>
            
        </div>
     );
}
 
export default Contactcomp_1;