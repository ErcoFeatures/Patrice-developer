import React, {useState} from "react";
import {Button} from "@material-ui/core";
import ReactCardFlip from "react-card-flip";
import Grid from "@material-ui/core/Grid";

const Portfolio = ({ data }) => {
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
  if (data) {
    var projects = data.projects.map((projects, index)=> {
      var projectImage = "images/portfolio/" + projects.image;
      return (
        <div key={index} className="columns project__card" onMouseEnter={doFlip} onMouseLeave={doFlap}>
          <div className="item-wrap">
            <ReactCardFlip isFlipped={isFlipped}>
              <div className="project__card">
                <div className='project__header front_side' style={{backgroundColor: projects.bgColor}}>
                  <img width="60" height="70" src={projects.headerImage} alt=''/>
                </div>
                <div className='project__skills'>
                 
                </div>
              </div>
              <div className="project__card back_side" style={{background:projects.backColor}}>
                <div className='project__header'>
                  <div className="heading">{projects.title}</div>
                </div>
                <div className='project__description'>
                  {projects.description}
                </div>
                <div className="row__button">
                  <Button className="button" onClick={()=>goToLink(projects.gotoLink)} >DEMO</Button>
                </div>
              </div>
            </ReactCardFlip>
            
          </div>
        </div>
      );
    });
  }

  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>

          <div
            id="portfolio-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf"
          >
            {projects}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
