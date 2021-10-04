import React, {useState} from 'react';
import style from './MenuBurger.module.scss'
import {Link} from "react-scroll";
import Fade from 'react-reveal/Fade';
import Links from "../../../Common/Link/Link";

export const MenuBurger = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false)


    const openMenuClass = menuIsOpen ? `${style.burgerNavItems} ${style.show}` : style.burgerNavItems


    const onBurgerToggleMenu = () => {
        setMenuIsOpen(!menuIsOpen)
    }
    return <div className={style.burgerNav}>
        <div className={openMenuClass}>
           <div className={style.btnContent}>
               <Fade top cascade>
                   <Links closeMenu={onBurgerToggleMenu} to={'main'} name={'Main'} />
                   <Links closeMenu={onBurgerToggleMenu} to={'works'} name={'Works'} />
                   <Links closeMenu={onBurgerToggleMenu} to={'skills'} name={'Skills'} />
                   <Links closeMenu={onBurgerToggleMenu} to={'contact'} name={'Contact'} />
               </Fade>
           </div>
        </div>
        <div>
            <button onClick={onBurgerToggleMenu} className={style.burgerBtn}>MENU</button>
        </div>
    </div>


}

