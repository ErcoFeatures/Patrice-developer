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
        skills: [
            "AWS",
            "Docker",
            "NodeJS",
            "CSS"
        ]
    },
    {
        title: "snapchat",
        description: "chat",
        headerImage:"",
        skills: [
            "AWS",
            "Docker",
            "NodeJS",
            "CSS"
        ]
    },
    {
        title: "shopify",
        description: "e-commerce",
        headerImage:"",
        skills: [
            "AWS",
            "Docker",
            "NodeJS",
            "CSS"
        ]
    },
    {
        title: "shopify",
        description: "e-commerce",
        headerImage:"",
        skills: [
            "AWS",
            "Docker",
            "NodeJS",
            "CSS"
        ]
    }
]

const Projects = () => {
    return (
        <div className='projects'>
            <div className='projects__title'>
                PORTFOLIO
            </div>
            <div className="projects__cards">
                <Grid container spacing={24}>
                    {projects.map(el => <Project {...el}/>)}
                </Grid>

            </div>


        </div>
    );
};

export default Projects;

