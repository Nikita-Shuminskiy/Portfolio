import React from 'react';
import style from './Contacts.module.css'
import {EntryField} from "./Entry_field/Entry_Field";
import {Title} from "../Common/Title/Title";

export const Contacts = () => {
    return (
        <div className={style.container}>
            <Title title={'Contacts'} />
            <EntryField/>
        </div>
    );
};

