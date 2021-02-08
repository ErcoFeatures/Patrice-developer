import React, {useState} from "react";
import {Button} from "@material-ui/core";
import ReactCardFlip from "react-card-flip";
import Grid from "@material-ui/core/Grid";
const Card = ({project}) => {
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
      <div className="columns project__card" onMouseEnter={doFlip} onMouseLeave={doFlap}>
        <div className="item-wrap">

          <ReactCardFlip isFlipped={isFlipped}>
            <div className="project__card">
              <div className='project__header front_side' style={{backgroundColor: project.bgColor}}>
                {project.headerImage!=="" && <img width="60" height="70" src={project.headerImage} alt=''/>}
              </div><div className='project__skills'>
              {
                project.skills.map((el,index) => <div  key={index} className="skill">{el.name} </div>)
              }
            </div>
            </div>
            <div className="project__card back_side" style={{background:project.backColor}}>
              <div className='project__header'>
                <div className="heading">{project.title}</div>
              </div>
              <div className='project__description'>
                {project.description}
              </div>
              <div className="row__button">
                <Button className="button" onClick={()=>goToLink(project.gotoLink)} >{project.buttonLabel}</Button>
              </div>
            </div>
          </ReactCardFlip>
        </div>
      </div>

  )
}

const Portfolio = ({ data }) => {

  if (data) {
    var projects = data.projects.map((projects, index)=> {
      var projectImage = "images/portfolio/" + projects.imageFront;
      return (
        <div key={projects.title} className="columns portfolio-item">
          <div className="item-wrap">
            <a href={projects.url} title={projects.title}>
              <img alt={projects.title} src={projectImage} />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>{projects.title}</h5>
                  <p>{projects.category}</p>
                </div>
              </div>
              <div className="link-icon">
                <i className="fa fa-link"></i>
              </div>
              <div className='project__skills'>
              {
                projects.skills.map((el,index) => <div  key={index} className="skill">{el.name} </div>)
              }
            </div>
            </a>
          </div>
        </div>
      );
    });
  }

  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works. <span style={{color:"#9f72f8"}}>Hover on card for details</span></h1>

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
