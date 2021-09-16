import React from 'react';
import style from './Work.module.scss'

export const Work = (props) => {
    return (
        <div className={style.container}>
            <div className={style.holder}>
                <img src={props.img} alt="img-Work"/>
                <div className={style.block}>
                    <a className={style.btn} href="#">watch</a>
                </div>
            </div>
            <div>
                <div>
                    <h3>Social Network</h3>
                </div>
                <p>Developers social network. Many features still in progress. But you can use base functions of any social network</p>
            </div>
        </div>
    );
};
