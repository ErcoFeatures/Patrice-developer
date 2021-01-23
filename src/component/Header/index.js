import React from 'react';
import './style.css'
import {Button} from '@material-ui/core'


const ScrollTo = (id) => {
    let element = document.getElementById(id);
    element.scrollIntoView({behavior:"smooth"});
}
const Header = () => {
    return (
        <div className="header">
            <div className="header__logo">
                LOGO
            </div>
            <div className="header__content">
                <div className="header__text">
                    <div className="header__text_name">PATRICE DIOUF</div>
                    <div className="header__text_title">FRONT-END ENGINEER</div>
                </div>
                <div className="row__buttons">
                    <Button variant="outlined"  className="header__button projects__button button" onClick={ () =>ScrollTo ("projectList")}>
                        PROJECTS
                    </Button>
                    <Button variant="outlined"  className="header__button services__button button" onClick={() => ScrollTo("service__plan")}>
                        SERVICES
                    </Button>
                </div>
            </div>


        </div>
    );
};

export default Header;