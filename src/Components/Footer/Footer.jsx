import React from 'react';
import {Link} from "./Link/Link";
import style from './Footer.module.scss'

export const Footer = () => {
    return (
        <div id={'contact'}  className={style.container}>
            <h2>Nick Shuminskiy</h2>
          <Link/>
            <h5>2021 All rights reserved &#9913;</h5>
        </div>
    );
};

