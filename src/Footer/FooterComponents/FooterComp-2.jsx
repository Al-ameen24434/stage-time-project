
import { Link } from "react-router-dom";
import './FooterComp-2.css'
const FooterComp_2 = () => {
    return ( 
        <div className="footer-comp-2">
            <div className="main-foot-2">
                <div className="foot-logo">
                    <Link to='/'>
                        <h2>The <br />
                        <span className="next-gen">Next Gen </span><br />
                        <span className="show">Show</span></h2>
                    
                    </Link>
                </div>
                <div className="main-foot-2-a">
                   
                    <ul>
                        
                        <span>Company</span>
                        <li>How it works</li>
                        <li>Talents</li>
                        <li>Events</li>
                    </ul>
                    <ul>
                        
                        <span>Resources</span>
                        <li>Blog post name goes here</li>
                        <li>Blog post name goes here</li>
                        <li>Blog post name goes here</li>
                        <li>see all resources</li>
                    </ul>
                    <ul>
                        
                        <span>About</span>
                        <li>Terms & Condition</li>
                        <li>Privacy Policy</li>
                        
                    </ul>

                </div>
                
            </div>
            <div className="copyright">
                Copyright &copy; 2023 The NextGen Show.
            </div>
        </div>
     );
}
 
export default FooterComp_2;