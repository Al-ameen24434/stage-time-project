import './Card-1.css'


const Card_1 = (props) => {
    return ( <div className="card-1">
        <div className="card-text">
            <p>{props.details}</p>
        </div>
        <div className="card-content">
            <img src={props.image} alt="" />
            <div className="card-name">
                <h2>{props.name}</h2>
                <p>{props.speciality}</p>
            </div>
        </div>
    </div> 
    );
}
 
export default Card_1;