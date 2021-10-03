import React from 'react';
import style from './Skills.module.scss'
import {Skill} from "./Skill/Skill";
import {Title} from "../Common/Title/Title";
import IconReact from '../../img/Icons/atom-science-symbol.png'
import IconTypeScript from '../../img/Icons/typescript.png'
import IconJS from '../../img/Icons/js.png'
import IconRestApi from '../../img/Icons/api.png'
import IconSaas from '../../img/Icons/sass.png'
import IconHTML from '../../img/Icons/html-5.png'
import IconGIT from '../../img/Icons/git-logo.png'
import IconRedux from '../../img/Icons/invention.png'
import IconTest from '../../img/Icons/test.png'
import Fade from 'react-reveal/Fade';

export const Skills = () => {
    return (
        <div id={'skills'} className={style.container}>
            <Title title={'My Skills'}/>
            <div className={style.skill}>
                <Fade right big>
                    <Skill title={'React'} img={IconReact}/>
                </Fade>
                <Fade right big>
                    <Skill title={'Redux/Redux-Toolkit'} img={IconRedux}/>
                </Fade>
                <Fade right big>
                    <Skill title={'TypeScript'} img={IconTypeScript}/>
                </Fade>
                <Fade right  big>
                    <Skill title={'JavaScript'} img={IconJS}/>
                </Fade>
                <Fade left big>
                    <Skill title={'Rest Api/Axios'} img={IconRestApi}/>
                </Fade>
                <Fade left big>
                    <Skill title={'SCSS/SAAS'} img={IconSaas}/>
                </Fade>
                <Fade left big>
                    <Skill title={'HTML/CSS'} img={IconHTML}/>
                </Fade>
                <Fade left big>
                    <Skill title={'Git/GitHub'} img={IconGIT}/>
                </Fade>
                <Fade left big>
                    <Skill title={'Unit/Jest/StoryBook'} img={IconTest}/>
                </Fade>
            </div>
            <svg className={style.svgFooter} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#0C0C0C" fill-opacity="1" d="M0,192L480,128L960,96L1440,256L1440,0L960,0L480,0L0,0Z"></path>
            </svg>
        </div>
    );
};

