import React from 'react';
import style from './Text.module.css'
import {Title} from "../../Common/Title/Title";

export const Text = () => {
    return (
        <div className={style.container} >
            <Title title={`I'm Nick Shym`} />
           <div>
               <p>Lorem Ipsum From USA is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the standard dummy text ever since.
                   Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text ever since
                   the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
           </div>
          <div>
              <ul className={style.push}>
                  <li>Элемент списка</li>
                  <li>Элемент списка</li>
                  <li>Элемент списка</li>
                  <li>Элемент списка</li>
              </ul>
          </div>
        </div>
    );
};
