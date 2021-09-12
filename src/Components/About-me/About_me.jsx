import React from 'react';
import style from './About_me.module.scss'
import photos from "../../img/PhotoTitle.jpg";
import {Title} from "../Common/Title/Title";

export const AboutMe = () => {
    return (
        <div id={'main'} className={style.container} >
                <svg className={style.svgTop} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#0C0C0C" fill-opacity="1" d="M0,0L480,288L960,64L1440,32L1440,320L960,320L480,320L0,320Z"></path>
                </svg>
            <img className={style.img} src={photos} alt="my images"/>
            <div className={style.textContainer} >
                <Title title={`I'm Nick Shuminsky`} />
                <div>
                    <p>Lorem Ipsum From USA is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the standard dummy text ever since.
                        Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text ever since
                        the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div>
                    <ul className={style.push}>
                        <li>TypeScript</li>
                        <li>JavaScript</li>
                        <li>React</li>
                    </ul>
                </div>
            </div>
            <svg className={style.svgFooter} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#0C0C0C" fill-opacity="1" d="M0,192L480,128L960,96L1440,256L1440,0L960,0L480,0L0,0Z"></path>
            </svg>
        </div>
    );
};
