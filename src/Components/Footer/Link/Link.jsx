import React from 'react';
import style from './Link.module.scss'

export const Link = () => {
    return (
        <div>
            <a className={style.links}  href="">Linkedin</a>
            <a  className={style.links} href="">VK</a>
            <a className={style.links}  href="">Telegram</a>
        </div>
    );
};

