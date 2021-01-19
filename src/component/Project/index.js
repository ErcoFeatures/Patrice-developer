import React, {useState} from 'react';
import ReactCardFlip from 'react-card-flip';
import './style.css'
import Grid from "@material-ui/core/Grid";

const Project = () => {

    const [isFlipped, setIsFlipped] = useState(false);

    const doFlip = () =>{
        setIsFlipped(!isFlipped);
    };
    return (
        <Grid item md={3}>
            <div className='project' onMouseOver={doFlip}>
                <ReactCardFlip isFlipped={isFlipped}>
                    <div className="project__card column">
                        <div className='project__header'>
                            FRONT
                        </div>
                        <div className='project__skills'></div>
                    </div>
                    <div className="project__card column">
                        <div className='project__header'>
                            BACK
                        </div>
                        <div className='project__skills'></div>
                    </div>
                </ReactCardFlip>
            </div>
        </Grid>

    );
};

export default Project;
