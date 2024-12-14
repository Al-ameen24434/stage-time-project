import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

import './Card-2.css'

const Card_2= (props) => {
    return ( 
        <div className="card-2">
            
            <div className="img">
                <img src={props.card2Image} alt="" />
            </div>
            <div className="all-btn">
            <div className="btn">
                <ArrowCircleRightIcon fontSize='large'/>

            </div>
            <div className="context">
                <p>{props.Ptag}</p>
                <h3>{props.h3}</h3>
            </div>
            </div>
           
        </div>
     );
}
 
export default Card_2
