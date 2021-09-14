import React, {useEffect, useState} from 'react';
import style from './Menu.module.scss'
import {Link} from "react-scroll";

export const Menu = () => {
    const [headerShow, setHeaderShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, [headerShow]);
    const handleScroll = () =>{
        (window.scrollY > 500) ? setHeaderShow(true) : setHeaderShow(false);
    }
    const classNameNav = headerShow ? style.scrollMenu : "transparent"

    return <div className={`${style.nav} ${classNameNav} ` } >

    <Link
            activeClass={style.active}
            to={'main'}
            spy={true}
            smooth={true}
            offset={-100}
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

