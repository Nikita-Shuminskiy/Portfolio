import React from 'react';
import style from './MyWorks.module.scss'
import {Work} from "./Works/Work";
import {Title} from "../Common/Title/Title";
import Rotate from 'react-reveal/Rotate';
import SocialPhoto from '../../img/social_media.jpg'
import TodoListsPhoto from '../../img/4fd7a3d8c52d410be61a4b3b6e7d3b79.jpg'
import CounterGif from '../../img/Counter-react-component-with-animation.gif'
import PortfolioPhoto from '../../img/Blog_Front-End-Portfolio.jpg'

export const MyWorks = () => {
    return (
        <div id={'works'} className={style.container}>
            <Title title={'My Projects'}/>
           <div className={style.works}>
               <Rotate top right>
                   <Work title={'Social Network'} links={'https://nick-gansta.github.io/Social_Network/#/profile'}
                         img={SocialPhoto}

                   />
                   <Work title={'Todo List'}  links={'https://github.com/nick-gansta/TodoList'} img={TodoListsPhoto} />
                   <Work title={'Counter'}  links={'https://github.com/nick-gansta/Counter_React'}  img={CounterGif}/>
                   <Work title={'Portfolio'}  links={'https://nick-gansta.github.io/Portfolio/'} img={PortfolioPhoto} />
               </Rotate>
           </div>
            <svg className={style.svgFooter} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#111" fill-opacity="1" d="M0,192L480,128L960,96L1440,256L1440,0L960,0L480,0L0,0Z"></path>
            </svg>
        </div>
    );
};

