import './FootComp1.css'


const FootComp1 = () => {
    return ( 
        <div className="foot-comp-1">
            <h1>Subcribe to our Newsletter</h1>
            <p>Join our mailing list to get the latest  news</p>
            <div className="foot-comp-1-input">
                <input type="text" placeholder='enter your email'/>
                <button>subscribe</button>
            </div>
        </div>
     );
}
 
export default FootComp1;