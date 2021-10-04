import React, {useRef, useState} from 'react';
import './Entry_Field.css'
import emailjs from 'emailjs-com'

export const EntryField = () => {
    const errorMessage = 'Error Net Work'
    const doneMessage = 'Done!'
    const [textSend,setTextSend] = useState('')
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_93cshjc', 'template_0gtowam', form.current, 'user_V18oJ0ysr8tkf7Eg98EIv')
            .then((result) => {
                console.log(result.text)
                setTextSend(doneMessage)
            }, (error) => {
                setTextSend(errorMessage)
            })
        e.target.reset()
    }
    return (<div className="container">
            <form ref={form} onSubmit={sendEmail}>
                <div className="row">
                    <div className="col-25">
                        <label for="name">First Name</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label for="name">Last Name</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label for="country">Country</label>
                    </div>
                    <div className="col-75">
                        <select id="country" name="country">
                            <option value="Belarus">Belarus</option>
                            <option value="Moskow">Russia</option>
                            <option value="Ukraine">Ukraine</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label for="subject">Subject</label>
                    </div>
                    <div className="col-75">
                        <textarea id="subject" name="subject" placeholder="Write something.."
                                  style={{height: "200px"}}></textarea>
                    </div>
                </div>
                <div className="row">
                    <input type="submit" value="Submit"/>
                    {textSend && <div className={'textSend'} >{textSend}</div>}
                </div>
    </form>
  </div>

    );
};

