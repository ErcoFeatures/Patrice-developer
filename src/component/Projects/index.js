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
        backColor: "linear-gradient(to right bottom, black, gray)",
        gotoLink:'',
        codeLink:'',
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
        codeLink:'',
        bgColor:"#396b2a",
        backColor:"linear-gradient(to right bottom, #396b2a, #1b2e21)",
        skills: [
            { name: "AWS",rate:3},
            { name: "Docker",rate:3},
            { name: "NodeJS",rate:3},
            { name: "CSS",rate:3},
        ]
    },
    {
        title: "ErcoLine",
        description: "e-commerce site built using Shopify  with customized checkout ",
        headerImage:"//cdn.shopify.com/s/files/1/0266/9861/2839/files/Artboard_2_copy_2_4x_50x.png?v=1601843627",
        gotoLink:'http://ercoline.ca/',
        bgColor:"#2752D1",
        backColor: "linear-gradient(to right bottom, #1E2D7D, #2752D1)",
        skills: [
            { name: "Shopify shop optimisation ",rate:3},
            { name: "Facebook Ads | Retargeting",rate:3},
            { name: "Testing products",rate:3},
            { name: "Influencer marcketing",rate:3},
        ]
    }
]

const Projects = () => {
    return (
        <div className='projects' id='projectList'>
            <div className="projects__content main__content">
                <div className='projects__title'>
                    PORTFOLIO
                </div>
                    <Grid container  justify="center" spacing={5} className="project__cards">
                        {projects.map((el, index) => <Project key={index}  {...el}/>)}
                    </Grid>
                </div>



        </div>
    );
};

export default Projects;

