import React from 'react';
import style from './MyWorks.module.scss'
import {Work} from "./Works/Work";
import {Title} from "../Common/Title/Title";
import Rotate from 'react-reveal/Rotate';
import SocialPhoto from '../../img/social_media.jpg'
import TodoListsPhoto from '../../img/TodoList.jpg'
import CounterGif from '../../img/Counter-react-component-with-animation.gif'
import PortfolioPhoto from '../../img/Blog_Front-End-Portfolio.jpg'
import Cards from '../../img/Cards.jpg'

export const MyWorks = () => {
    return (
        <div id={'works'} className={style.container}>
            <Title title={'My Projects'}/>
           <div className={style.works}>
               <Rotate top right>
                   <Work title={'Social Network'}
                         linkGitHub={'https://github.com/nick-gansta/Social_Network'}
                         links={'https://nick-gansta.github.io/Social_Network/#/profile'}
                         img={SocialPhoto}
                   />
                   <Work title={'Todo List'} linkGitHub={'https://github.com/nick-gansta/TodoList'}
                         links={'https://nick-gansta.github.io/TodoList/#/'} img={TodoListsPhoto}/>
                   <Work title={'Counter'} linkGitHub={'https://github.com/nick-gansta/Counter_React'}
                         img={CounterGif}/>
                   <Work title={'Portfolio'} linkGitHub={'https://github.com/nick-gansta/Portfolio'}
                         img={PortfolioPhoto}/>
                   <Work title={'Cards'} linkGitHub={'https://github.com/nick-gansta/Cards-front-1-0'}
                         links={'https://nick-gansta.github.io/Cards-front-1-0/#/login'} img={Cards}/>
               </Rotate>
           </div>
            <svg className={style.svgFooter} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#111" fill-opacity="1" d="M0,192L480,128L960,96L1440,256L1440,0L960,0L480,0L0,0Z"></path>
            </svg>
        </div>
    );
};

