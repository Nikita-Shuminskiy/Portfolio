import React from 'react';
import style from './Contacts.module.css'
import {EntryField} from "./Entry_field/Entry_Field";

export const Contacts = () => {
    return (
        <div className={style.container}>
            <h2>Contacts</h2>
            <EntryField/>
        </div>
    );
};

