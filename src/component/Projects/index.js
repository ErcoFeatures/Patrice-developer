import React from 'react';
import './style.css'
import Project from "../Project";

import Grid from "@material-ui/core/Grid";
const projects = [
    {
        title: "vue",
        description: "e-commerce",
        headerImage:"https://media.giphy.com/media/1wmdIGcw9g09BqHmmX/giphy.gif",
        bgColor:"black",
        gotoLink:'',
        skills: [
            { name: "AWS",rate:3},
            { name: "Docker",rate:3},
            { name: "NodeJS",rate:3},
            { name: "CSS",rate:3},
        ]
    },
    {
        title: "snapchat",
        description: "chat",
        headerImage:"",
        gotoLink:'',
        skills: [
            { name: "AWS",rate:3},
            { name: "Docker",rate:3},
            { name: "NodeJS",rate:3},
            { name: "CSS",rate:3},
        ]
    },
    {
        title: "shopify",
        description: "e-commerce",
        headerImage:"",
        gotoLink:'',
        skills: [
            { name: "AWS",rate:3},
            { name: "Docker",rate:3},
            { name: "NodeJS",rate:3},
            { name: "CSS",rate:3},
        ]
    },
    {
        title: "shopify",
        description: "e-commerce",
        headerImage:"",
        gotoLink:'',
        rate:3,
        skills: [
            { name: "AWS",rate:3},
            { name: "Docker",rate:3},
            { name: "NodeJS",rate:3},
            { name: "CSS",rate:3},
        ]
    }
]

const Projects = () => {
    return (
        <div className='projects' id='projectList'>
            <div className="projects__content">
                <div className='projects__title'>
                    PORTFOLIO
                </div>
                    <Grid container spacing={24} className="project__cards">
                        {projects.map(el => <Project {...el}/>)}
                    </Grid>
                </div>



        </div>
    );
};

export default Projects;

