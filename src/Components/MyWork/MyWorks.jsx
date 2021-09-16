import React from 'react';
import style from './MyWorks.module.scss'
import {Work} from "./Works/Work";
import {Title} from "../Common/Title/Title";
import Rotate from 'react-reveal/Rotate';

export const MyWorks = () => {
    return (
        <div id={'works'} className={style.container}>
            <Title title={'My Projects'}/>
           <div className={style.works}>
               <Rotate top right>
                   <Work img={'https://image.shutterstock.com/image-vector/do-list-plan-reminder-hand-260nw-562119679.jpg'}/>
                   <Work img={'https://image.shutterstock.com/image-vector/do-list-plan-reminder-hand-260nw-562119679.jpg'} />
                   <Work img={'https://image.shutterstock.com/image-vector/do-list-plan-reminder-hand-260nw-562119679.jpg'}/>
                   <Work img={'https://image.shutterstock.com/image-vector/do-list-plan-reminder-hand-260nw-562119679.jpg'} />
               </Rotate>
           </div>
            <svg className={style.svgFooter} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#111" fill-opacity="1" d="M0,192L480,128L960,96L1440,256L1440,0L960,0L480,0L0,0Z"></path>
            </svg>
        </div>
    );
};

