import React from 'react';
import style from './Skills.module.css'
import {Skill} from "./Skill/Skill";

export const Skills = () => {
    return (
        <div className={style.container} >
            <h2>My Skills</h2>
          <div className={style.skill}>
              <Skill/>
              <Skill/>
              <Skill/>
          </div>
        </div>
    );
};

