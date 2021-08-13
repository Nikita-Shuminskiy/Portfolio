import React from 'react';
import style from './Header.module.css'
import {Menu} from "./Menu/Menu";

export const Header = () => {

    return (
        <div className={`${style.container} ${style.noScroll}`}>
            <Menu/>
        </div>
    );
};