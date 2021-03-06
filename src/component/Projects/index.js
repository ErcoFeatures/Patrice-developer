import React from 'react';
import './style.css'
import Project from "../Project";

import Grid from "@material-ui/core/Grid";
const projects = [
    {
        title: "SandaChat",
        description: "e-commerce",
        headerImage:"https://media.giphy.com/media/1wmdIGcw9g09BqHmmX/giphy.gif",

        bgColor:"black",
        backColor: "linear-gradient(to right bottom, black, gray)",
        gotoLink:'',
        codeLink:'',
        skills: [
            { name: "EXPO",rate:3},
            { name: "React native element",rate:3},
            { name: "firebase",rate:3},
            { name: "React-navigation",rate:3},
        ]
    },
    {
        title: "Nawde  BDStory",
        description: "It's your birthday? create a private or public story room, so your friend can make your day unique with insane videos :)",
        headerImage:"",
        gotoLink:'https://nawde-c26fa.web.app/',
        codeLink:'',
        bgColor:"#396b2a",
        backColor:"linear-gradient(to right bottom, #396b2a, #1b2e21)",
        skills: [
            { name: "React",rate:3},
            { name: "Redux",rate:3},
            { name: "NodeJs",rate:3},
            { name: "Firebase",rate:3},
        ]
    },
    {
        title: "Sanda Chat",
        description: "chat and call app",
        headerImage:"",
        gotoLink:'https://sandachat-b581e.web.app/',
        codeLink:'',
        bgColor:"#396b2a",
        backColor:"linear-gradient(to right bottom, #396b2a, #1b2e21)",
        skills: [
            { name: "Expo",rate:3},
            { name: "React Native",rate:3},
            { name: "Firebase ( auth, db)",rate:3},
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
            { name: "Facebook Ads"},
            { name: "Retargeting ",rate:3},
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
                    <Grid container  justify="center" spacing={0} className="project__cards">
                        {projects.map((el, index) => <Project key={index}  {...el}/>)}
                    </Grid>
                </div>



        </div>
    );
};

export default Projects;

