import React from 'react';
import style from './MyTitle.module.scss'
import {Menu} from "./Menu/Menu";

export const MyTitle = () => {
    return <div className={style.container}>
            <Menu/>
        <h1 className={style.myTitle}>
            I am Nick, Front-End Developer
        </h1>
    </div>


};

