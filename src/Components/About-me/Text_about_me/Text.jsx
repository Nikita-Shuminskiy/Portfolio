import React from 'react';
import style from './Text.module.css'
import {Title} from "../../Common/Title/Title";

export const Text = () => {
    return (
        <div>
            <Title title={`I'm Nick Shym`} />
            <p>A Front-end Developer</p>
            <p>About ME</p>
          <div style={style.listDiv}>
              <ol className={style.pills}>
                  <li>Элемент списка</li>
                  <li>Элемент списка</li>
                  <li>Элемент списка</li>
                  <li>Элемент списка</li>
                  <li>Элемент списка</li>
              </ol>
          </div>
        </div>
    );
};
