import React from 'react';
import style from './About_me.module.css'
import {Text} from "./Text_about_me/Text";
import {Image} from "./Image/Image";

export const AboutMe = () => {
    return (
        <div className={style.container} >
            <Text/>
            <Image/>
        </div>
    );
};
