import React, {useState} from 'react';
import ReactCardFlip from 'react-card-flip';
import './style.css'
import Grid from "@material-ui/core/Grid";

const Project = (props) => {

    const [isFlipped, setIsFlipped] = useState(false);

    const doFlip = () =>{
        setIsFlipped(!isFlipped);
    };
    debugger;
    return (
        <Grid item md={3}>
            <div className='project' onMouseOver={doFlip}>
                <ReactCardFlip isFlipped={isFlipped}>
                    <div className="project__card">
                        <div className='project__header' style={{backgroundColor:props.bgColor}}>
                           <img width="60" height="100" src={props.headerImage} alt='' />
                        </div>
                        <div className='project__skills'></div>
                    </div>
                    <div className="project__card">
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
