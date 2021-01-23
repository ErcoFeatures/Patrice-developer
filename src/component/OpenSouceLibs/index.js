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
                <Grid spacing={5}  container className="row">
                    <Grid item xs={4} className="col-1-of-2 openSource__content__descirption">
                        <h1>MOTIVATED TO PRODUCE RESULTS</h1>
                        <p>As a tenacious self-taught programmer, I use continuous iteration to produce results quickly
                            and
                            continuously improve products.
                            AN AGILE COLLABORATOR
                            I have contributed to open source projects, worked on engineering teams, and always stay
                            attuned
                            to the newest frameworks.
                        </p>
                    </Grid>
                    <Grid  justify="flex-end" item xs={8} className="col-2-of-2 openSource__content__libs">
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