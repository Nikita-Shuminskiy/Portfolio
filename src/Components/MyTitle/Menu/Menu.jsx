import React from 'react';
import style from './Menu.module.scss'
import {NavLink} from 'react-router-dom';

export const Menu = () => {
    return <div className={style.container}>
        <ul className={style.navBar}>
            <li className={style.navLink}><NavLink to={'/main'}>Main</NavLink></li>
            <li className={style.navLink}><NavLink to={'/skills'}>Skills</NavLink></li>
            <li className={style.navLink}><NavLink to={'/work'}>Work</NavLink></li>
            <li className={style.navLink}><NavLink to={'/contact'}>Contact</NavLink></li>
        </ul>
    </div>


}

