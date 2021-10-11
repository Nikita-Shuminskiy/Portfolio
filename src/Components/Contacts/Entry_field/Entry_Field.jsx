import React, {useEffect, useRef, useState} from 'react';
import './Entry_Field.css'
import emailjs from 'emailjs-com'

export const EntryField = () => {
    const errorMessage = 'Error Net Work'
    const doneMessage = 'Done!'
    const [textSend, setTextSend] = useState('')
    const [wait, setWait] = useState(false)
    const form = useRef();

    const sendEmail = (e) => {
          setWait(true)
          e.preventDefault()
          emailjs.sendForm('service_93cshjc', 'template_0gtowam', form.current, 'user_V18oJ0ysr8tkf7Eg98EIv')
              .then((result) => {
                  setWait(false)
                  setTextSend(doneMessage)
              }, (error) => {
                  setWait(false)
                  setTextSend(errorMessage)
              })
          e.target.reset()

    }
    useEffect(() => {
        setTimeout(() => {
            setTextSend('')
        }, 2000)
    }, [textSend])
    return (<div className="container">
            <form ref={form} onSubmit={sendEmail}>
                <div className="row">
                    <div className="col-25">
                        <label for="name">First Name</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="name" name="firstname" placeholder="Your name.."/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label for="name">Last Name</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="name" name="lastname" placeholder="Your last name.."/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label for="country">Country</label>
                    </div>
                    <div className="col-75">
                        <select id="country" name="country">
                            <option value="Belarus">Belarus</option>
                            <option value="Moscow">Russia</option>
                            <option value="Ukraine">Ukraine</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label for="message">Subject</label>
                    </div>
                    <div className="col-75">
                        <textarea id="message" name="message" placeholder="Write something.."
                                  style={{height: "200px"}}/>
                    </div>
                </div>
                <div className="row">
                    {wait ? <div className={'textSend'}>Waiting for an answer!</div> :
                        <input type="submit" value="Submit"/>}
                    {textSend && <div className={'textSend'}>{textSend} : )</div>}
                </div>
    </form>
  </div>

    );
};

