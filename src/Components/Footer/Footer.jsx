import React from 'react';
import style from './Footer.module.scss'
import IconTelegram from '../../img/Icons/telegram.png'
import IconLinkiDin from '../../img/Icons/linkedin.png'
import IconCodWars from '../../img/Icons/programming.png'
import IconGitHub from '../../img/Icons/github.png'
import {Title} from "../Common/Title/Title";


export const Footer = () => {
    return (
        <div  className={style.container}>
            <Title title={'Nikita Shuminskiy'} />
            <div className={style.contactBlock}>
                <a title={'Telegram'} href="https://t.me/nickShym">
                    <img src={IconTelegram} alt="Link-Telegram"/>
                </a>
                <a title={'Linkedin'} href="https://www.linkedin.com/in/nick-s-542471165/">
                    <img src={IconLinkiDin} alt="Linkedin"/>
                </a>
                <a title={'Cod-Wars'} href="https://www.codewars.com/users/umora">
                    <img src={IconCodWars} alt="Cod-Wars"/>
                </a>
                <a title={'Git-Hub'} href="https://github.com/nick-gansta">
                    <img src={IconGitHub} alt="Git-Hub"/>
                </a>
            </div>
            <p>2021 All rights reserved &#9913;</p>
        </div>
    );
};

