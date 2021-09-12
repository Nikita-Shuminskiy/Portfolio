import React, {useState} from 'react';
import style from './MenuBurger.module.scss'
import {Link} from "react-scroll";

export const MenuBurger = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false)


    const openMenuClass = menuIsOpen ? `${style.burgerNavItems} ${style.show}` : style.burgerNavItems


    const onBurgerBtnClick = () => {
        setMenuIsOpen(!menuIsOpen)
    }

    return <div className={style.burgerNav}>
        <div className={openMenuClass}>
            <Link
                activeClass={style.active}
                to={'main'}
                spy={true}
                smooth={true}
                offset={1}
                duration={500}
            >Main</Link>
            <Link
                activeClass={style.active}
                to={'works'}
                spy={true}
                smooth={true}
                offset={1}
                duration={500}
            >Works</Link>
            <Link
                activeClass={style.active}
                to={'skills'}
                spy={true}
                smooth={true}
                offset={1}
                duration={500}
            >Skills</Link>
            <Link
                activeClass={style.active}
                to={'contact'}
                spy={true}
                smooth={true}
                offset={1}
                duration={500}
            >Contact</Link>
        </div>
        <div>
            <button onClick={onBurgerBtnClick} className={style.burgerBtn}>MENU</button>
        </div>
    </div>


}

