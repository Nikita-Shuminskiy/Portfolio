import React from 'react';
import style from './Header.module.scss'
import {Menu} from "../MyTitle/Menu/Menu";

export const Header = () => {

    return (
        <div className={style.container}>
            <Menu/>
        </div>
    );
};