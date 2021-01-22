import React, {useState} from 'react';
import ReactCardFlip from 'react-card-flip';
import './style.css'
import Grid from "@material-ui/core/Grid";

const Project = (props) => {

    const [isFlipped, setIsFlipped] = useState(false);

    const doFlip = () => {
        setIsFlipped(true);
    };
    const doFlap = () => {
        setIsFlipped(false);
    };
    return (
            <Grid item md={3} onMouseEnter={doFlip} onMouseLeave={doFlap} className="project">
                <ReactCardFlip isFlipped={isFlipped}>
                    <div className="project__card">
                        <div className='project__header' style={{backgroundColor: props.bgColor}}>
                            <img width="60" height="100" src={props.headerImage} alt=''/>
                        </div>
                        <div className='project__skills'>
                            {
                                props.skills.map(el => <div className="skill">{el.name} </div>)

                            }
                        </div>
                    </div>
                    <div className="project__card">
                        <div className='project__header'>
                            <img width="60" height="100" src={props.headerImage} alt=''/>
                        </div>
                        <div className='project__skills'></div>
                    </div>
                </ReactCardFlip>
            </Grid>

    );
};

export default Project;
