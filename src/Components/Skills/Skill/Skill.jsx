import React from 'react';
import style from './Skill.module.scss'

export const Skill = (props) => {
    return (
        <div className={style.container}>
                  {/*  <span className={style.icon}><i className="icon-circle-compass"></i></span>*/}
                    <img className={style.imgIcon} src={props.img} alt="121"/>
                     <p><b>{props.title}</b></p>
        </div>
    );
};

