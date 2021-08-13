import React from 'react';
import style from './About_me.module.css'
import {Text} from "./Text_about_me/Text";
import {Image} from "./Image/Image";
import '../../App.css'

export const AboutMe = () => {
    return (
        <div className={style.container} >
                <svg className={style.svgTop} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#0C0C0C" fill-opacity="1" d="M0,0L480,288L960,64L1440,32L1440,320L960,320L480,320L0,320Z"></path>
                </svg>
            <Image/>
            <Text/>
            <svg className={style.svgFooter} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#0C0C0C" fill-opacity="1" d="M0,192L480,128L960,96L1440,256L1440,0L960,0L480,0L0,0Z"></path>
            </svg>
        </div>
    );
};
