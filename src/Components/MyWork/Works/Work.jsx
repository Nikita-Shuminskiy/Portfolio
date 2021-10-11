import React from 'react';
import style from './Work.module.scss'
import {Title} from "../../Common/Title/Title";

export const Work = (props) => {
    return (
        <div className={style.container}>
            <div className={style.holder}>
                <img src={props.img} alt="img-Work"/>
                <div className={style.block}>
                    {props.links && <a className={style.btn} href={props.links} target="_blank">Watch</a>}
                    <a className={style.btn} href={props.linkGitHub} target="_blank">GitHub</a>
                </div>
            </div>
            <div>
                <div className={style.textBlock}>
                    <Title title={props.title} />
                </div>
                <p>{props.textTitle}</p>
                </div>
        </div>
    );
};
