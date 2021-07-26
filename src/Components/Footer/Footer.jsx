import React from 'react';
import {Link} from "./Link/Link";
import style from './Footer.module.css'

export const Footer = () => {
    return (
        <div className={style.container}>
            <h2>Nick Shuminskiy</h2>
          <Link/>
            <h5>2021 All rights reserved &#9913;</h5>
        </div>
    );
};
