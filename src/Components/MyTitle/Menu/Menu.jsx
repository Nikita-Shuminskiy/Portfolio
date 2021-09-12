import React from 'react';
import style from './Menu.module.scss'
import {Link} from "react-scroll";

export const Menu = () => {
    return <div className={style.nav}>
        <Link
            activeClass={style.active}
            to={'main'}
            spy={true}
            smooth={true}
            offset={1}
            duration={700}
        >Main</Link>
        <Link
            activeClass={style.active}
            to={'works'}
            spy={true}
            smooth={true}
            offset={1}
            duration={700}
        >Works</Link>
        <Link
            activeClass={style.active}
            to={'skills'}
            spy={true}
            smooth={true}
            offset={1}
            duration={700}
        >Skills</Link>
        <Link
            activeClass={style.activeLast}
            to={'contact'}
            spy={true}
            smooth={true}
            offset={1}
            duration={700}
        >Contact</Link>
    </div>


}

