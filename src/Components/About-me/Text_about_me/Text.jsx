import React from 'react';
import style from './Text.module.css'
import {Title} from "../../Common/Title/Title";

export const Text = () => {
    return (
        <div className={style.container} >
            <Title title={`I'm Nick Shym`} />
            <p>A Front-end Developer</p>
            <p>Lorem Ipsum From USA is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the standard dummy text ever since.
                Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text ever since
                the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <ul  className={style.list4b}>
                  <li>Core technology stack</li>
                  <li>React</li>
                  <li>Redux</li>
                  <li>Java-script</li>
                  <li>TypeScript</li>
                  <li>Core technology stack</li>
                  <li>React</li>
                  <li>Redux</li>
                  <li>Java-script</li>
                  <li>TypeScript</li>
                  <li>Core technology stack</li>
                  <li>React</li>
                  <li>Redux</li>
                  <li>Java-script</li>
                  <li>TypeScript</li>
              </ul>

        </div>
    );
};
