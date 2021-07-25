import React from 'react';
import style from './Work.module.css'

export const Work = () => {
    return (
        <div className={style.container}>
          <div>
              <img className={style.img} src="https://www.nicepng.com/png/full/31-315310_react-hexagon-react-js-transparent-background.png" alt="123"/>
              <button>Watch</button>
          </div>
            <div>
                some text
            </div>
        </div>
    );
};
