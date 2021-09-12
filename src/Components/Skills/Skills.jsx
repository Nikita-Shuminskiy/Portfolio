import React from 'react';
import style from './Skills.module.scss'
import {Skill} from "./Skill/Skill";
import {Title} from "../Common/Title/Title";

export const Skills = () => {
    return (
        <div id={'skills'} className={style.container} >
            <Title title={'My Skills'} />
          <div className={style.skill}>
              <Skill/>
              <Skill/>
              <Skill/>
              <Skill/>
              <Skill/>
              <Skill/>
          </div>
            <svg className={style.svgFooter} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#0C0C0C" fill-opacity="1" d="M0,192L480,128L960,96L1440,256L1440,0L960,0L480,0L0,0Z"></path>
            </svg>
        </div>
    );
};

