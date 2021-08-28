import React from 'react';
import style from './Work.module.css'

export const Work = (props) => {
    return (
        <div className={style.container}>
            <div className={`${style.view} ${style.viewFirst}`}>
                <img src={props.img}/>
                <div className={style.mask}>
                    <h2>Empire State</h2>
                    <p>A cool description of some sort between these tags. I am so cool and awesomely awesome.</p>
                    <a href="#" className={style.info}>Read More</a>
                </div>
            </div>
        </div>
    );
};
