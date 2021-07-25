import React from 'react';
import style from './Skill.module.css'

export const Skill = () => {
    return (
        <div className={style.container}>
            <div>
                <img className={style.img} src="https://www.nicepng.com/png/full/31-315310_react-hexagon-react-js-transparent-background.png" alt="123"/>
                <h3>React</h3>
            </div>
            <div>
                some text
            </div>
        </div>
    );
};

