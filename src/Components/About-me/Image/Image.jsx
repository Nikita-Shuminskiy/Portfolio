import React from 'react';
import style from './Image.module.css'
import photos from '../../../img/PhotoTitle.jpg'

export const Image = () => {
    return (
            <img className={style.img} src={photos} alt="my images"/>
    );
};

