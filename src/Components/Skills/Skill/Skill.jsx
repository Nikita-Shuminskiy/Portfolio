import React from 'react';
import style from './Skill.module.css'

export const Skill = () => {
    return (
        <div className={style.container}>
            <div className={style.itemContainer}>
                <div className={style.item}>
                    {/*<span className={style.icon}><i className="icon-circle-compass"></i></span>*/}
                    <img className={style.imgIcon} src={'https://zn.ua/img/forall/u/0/-1/users/May2016/147434.jpg'} alt="121"/>
                    <h6>Branding</h6>
                    <p>Lorem Ipsum is simply dummy text of the printing and type setting industry.</p>
                </div>
            </div>
        </div>
    );
};

