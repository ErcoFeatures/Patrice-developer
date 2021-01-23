import React, {useState} from 'react';
import ReactCardFlip from 'react-card-flip';
import './style.css'
import Grid from "@material-ui/core/Grid";
import {Button} from "@material-ui/core";

const Project = (props) => {

    const [isFlipped, setIsFlipped] = useState(false);

    const doFlip = () => {
        setIsFlipped(true);
    };
    const doFlap = () => {
        setIsFlipped(false);
    };
    const goToLink=(link)=>{
        window.open(link, '_blank')
    }
    return (
            <Grid item md={3} onMouseEnter={doFlip} onMouseLeave={doFlap} className="project">
                <ReactCardFlip isFlipped={isFlipped}>
                    <div className="project__card">
                        <div className='project__header front_side' style={{backgroundColor: props.bgColor}}>
                            <img width="60" height="70" src={props.headerImage} alt=''/>
                        </div>
                        <div className='project__skills'>
                            {
                                props.skills.map((el,index) => <div  key={index} className="skill">{el.name} </div>)
                            }
                        </div>
                    </div>
                    <div className="project__card back_side" style={{background:props.backColor}}>
                        <div className='project__header'>
                            <div className="heading">{props.title}</div>
                        </div>
                        <div className='project__description'>
                            {props.description}
                        </div>
                        <div className="row__button">
                            <Button className="button" onClick={()=>{goToLink(props.gotoLink)}} >DEMO</Button>
                        </div>
                    </div>
                </ReactCardFlip>
            </Grid>

    );
};

export default Project;
