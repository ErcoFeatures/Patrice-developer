import React from 'react';
import './style.css'
import {Button} from '@material-ui/core'


const ScrollTo = () => {

}
const Header = () => {
    return (
        <div className="header">
            <div className="header__logo">
                LOGO
            </div>
            <div className="header__text">
                <div className="header__text_name">PATRICE DIOUF</div>
                <div className="header__text_title">FRONT-END ENGINEER</div>
                <Button variant="outlined"  className="header__button" onClick={ScrollTo}>
                    PROJECTS
                </Button>
            </div>

        </div>
    );
};

export default Header;