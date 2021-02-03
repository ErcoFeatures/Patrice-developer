import React from 'react';
import './style.css'
import Grid from "@material-ui/core/Grid";
import nodejs from '../../images/nodejs.png'
import react from '../../images/react.png'
import redux from '../../images/redux.png'
import vue from '../../images/vue.png'
import javascript from '../../images/javascript.png'

const OpenSourceLibs = () => {
    return (
        <div className="openSource">
            <div className="openSource__content main__content">
                <div className="openSource__title">
                    FRONT END FOCUSED
                </div>
                <Grid spacing={5} container className="row">
                    <Grid item xs={7} className="col-1-of-2 openSource__content__descirption">
                        <div className="heading">MOTIVATED TO PRODUCE RESULTS</div>
                        <p className="paragraph"> Front-end developer with more than 4 years of experience designing and implementing IT
                            solutions with complex and high quality UX/UI results.
                            Expert with React/ redux/ hook. proficient with backlog management, design/build and
                            configure web applications. Always seeking for challenges.
                        </p>
                        <div className="heading">my focus:</div>
                        <ul>
                            <li>Web developer (back-end and front-end) / DevOps</li>
                            <li>Design and build/configure</li>
                            <li>Clean code and best practices</li>

                        </ul>

                    </Grid>
                    <Grid justify="flex-end" item xs={5} className="col-2-of-2 openSource__content__libs">
                        <img src={react} alt="Node" className="composition__photo composition__photo--p3"/>
                        <img src={redux} alt="JS" className="composition__photo composition__photo--p1"/>
                        <img src={nodejs} alt="React" className="composition__photo composition__photo--p2"/>

                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default OpenSourceLibs;