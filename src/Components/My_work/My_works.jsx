import React from 'react';
import style from './My_works.module.css'
import {Work} from "./Works/Work";

export const MyWorks = () => {
    return (
        <div className={style.container}>
            <h2>My Works</h2>
           <div className={style.works}>
               <Work/>
               <Work/>
           </div>
        </div>
    );
};

