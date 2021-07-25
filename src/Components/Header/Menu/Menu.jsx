import React from 'react';
import style from './Menu.module.css'

export const Menu = () => {
    return (<ul className={style.ul}>
            <li className={style.li}>Main</li>
            <li className={style.li}>Skills</li>
            <li className={style.li}>Work</li>
            <li className={style.li}>Contact</li>
        </ul>
    );
};

