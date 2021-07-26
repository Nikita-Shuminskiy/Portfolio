import React from 'react';
import style from './Entry_Field.module.css'

export const EntryField = () => {
    return (
        <div className={style.container}>
            <input className={style.input} type="text"/>
            <input className={style.input} type="text"/>
            <textarea className={style.area}/>
        </div>
    );
};

