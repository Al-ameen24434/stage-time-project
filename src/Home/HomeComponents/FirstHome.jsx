import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import './FirstHome.css'
const FirstHome = () => {
    return ( 
        <div className="first-home-content">
            <div className="first-home-content-1">
                <h1>Impacting lives of young people in Africa.</h1>
                <p>Making Youngsters leverage their skills, abilities and 
                    talents stand out as a goal getter
                </p>
            </div>
            <div className="first-home-button">
                
                <button>join us</button>
                
                <div className="play-button">

                    <PlayCircleIcon fontSize='large'/>
                        <p>How it works</p>
                    
                </div>
            </div>
        </div>
     );
}
 
export default FirstHome;