import React from 'react';
import style from './Entry_Field.module.scss'

export const EntryField = () => {
    return (
   <div className={style.container}  >
            <form >
            <input  type="text" name="name" placeholder="Name *" required="required" data-error="Firstname is required."/>
            <input type="email" name="email" placeholder="Email *" required="required" data-error="Valid email is required."/>
            <input type="text" name="subject" placeholder="Subject"/>
          <div>
          <textarea name="about you" readOnly   required="required"  cols="80" rows="10"></textarea>
          </div>
          <a  className={`${style.btn} ${style.btn4}`}>SEND</a>
        </form>
   </div>
    );
};

