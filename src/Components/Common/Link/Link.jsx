import React from 'react';
import style from './Link.module.scss'
import {Link} from "react-scroll";

const Links = (props) => {
    return (
        <>
            <Link
                onClick={props.closeMenu}
                activeClass={style.active}
                to={props.to}
                spy={true}
                smooth={true}
                offset={1}
                duration={500}
            >{props.name}</Link>
        </>
    );
};

export default Links;