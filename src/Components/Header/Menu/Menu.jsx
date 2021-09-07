import React from 'react';
import style from './Menu.module.scss'
import {NavLink} from 'react-router-dom';

export const Menu = () => {


    return (  <ul className={style.navBar}>
                        <li className={style.navLink}><NavLink to={'/main'} className={style.navLink} href="#">Main</NavLink></li>
                        <li ><NavLink to={'/skills'} className={style.navLink} href="#">Skills</NavLink></li>
                        <li ><NavLink  to={'/work'} className={style.navLink} href="#">Work</NavLink></li>
                        <li ><NavLink to={'/contact'}  className={style.navLink} href="#">Contact</NavLink></li>
                    </ul>
    );
};

