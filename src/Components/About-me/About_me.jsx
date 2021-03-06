import React from 'react';
import style from './About_me.module.scss'
import photos from "../../img/PhotoTitle.jpg";
import {Title} from "../Common/Title/Title";
import Particles from 'react-particles-js';
import Slide from 'react-reveal/Slide';
import Flip from 'react-reveal/Flip';

export const AboutMe = () => {
    const particlesOpt = {
        "particles": {
            "number": {
                "value": 50
            },
            "size": {
                "value": 3
            }
        },
        "interactivity": {
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                }
            }
        }
    }
    return (
        <div id={'main'} className={style.container} >
                <svg className={style.svgTop} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#0C0C0C" fill-opacity="1" d="M0,0L480,288L960,64L1440,32L1440,320L960,320L480,320L0,320Z"></path>
                </svg>
                <Particles className={style.particles} params={particlesOpt} />
            <Slide right>
                <img className={style.img} src={photos} alt="my images"/>
            </Slide>
            <div className={style.textContainer} >
                <Title title={`I'm Nikita Shuminsky`} />
              <div>
                  <Flip left>
                      <h5>Front-end Developer</h5>
                  </Flip>
              </div>
                <div>
                    <p>Innovative and highly driven Front-End Developer with experience in creating SPA applications using React,
                        Redux, and TypeScript. Passionate about usability and optimization, always eager to learn and look for ways
                        to continuously upgrade my technical abilities. I enjoy working collaboratively in a team environment but can
                        also run with projects on my own. I spend my free time at CodeWars,
                        read books and work on improving my English. Open to your suggestions!</p>
                </div>
            </div>
            <svg className={style.svgFooter} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#0C0C0C" fill-opacity="1" d="M0,192L480,128L960,96L1440,256L1440,0L960,0L480,0L0,0Z"></path>
            </svg>
        </div>
    );
};
