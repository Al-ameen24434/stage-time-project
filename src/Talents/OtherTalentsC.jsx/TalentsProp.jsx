import './TalentProp.css'




const TalentProp = (props) => {
    return ( 
        <div className="talent-prop">
            <h3>{props.name}</h3>
            <p>{props.details}</p>
        </div>
     );
}
 
export default TalentProp;