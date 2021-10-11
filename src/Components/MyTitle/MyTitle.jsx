import React from 'react';
import style from './MyTitle.module.scss'
import {Menu} from "./Menu/Menu";
import {MenuBurger} from "./Menu/MenuBurger/MenuBurger";
import ReactTypingEffect from 'react-typing-effect'


export const MyTitle = () => {
    return <div className={style.container}>
        <Menu/>
        <MenuBurger/>
        <h1 className={style.myTitle}>
            I am Nick,
            <ReactTypingEffect
                speed={200}
                text={["Front-end Developer"]}
            />
        </h1>
    </div>
};

