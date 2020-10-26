import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form } from 'antd';
import { Map, GoogleApiWrapper } from 'google-maps-react';



const Contactme = (props) => {
    let resumeData = props.resumeData;
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');
    const onSubmit = (event) => {
        event.preventDefault();
        setName('');
        setMessage('');
        setEmail('');

        axios({
            method: "POST", 
            url:"http://localhost:4200/contact", 
            data:  {name,message,email}
          }).then((response)=>{
              console.log(response,'response')
            if (response.data.status === 'success') {
              alert("Message Sent."); 
            } else if(response.data.status === 'fail') {
              alert("Message failed to send.")
            }
          })

    }


    return (
        <section className='contact'>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6" id='contact'>
                        <h1>Contact with Me.</h1>
                        <Form action="/contact" id="contact-form" method="post" role="form">
                            <div className='form-group'>
                                <label>Name:</label>
                                <input type='text' name='name' value={name} className='form-control' placeholder='Enter Your Name'
                                    onChange={e => setName(e.target.value)} />
                            </div>
                            <div className='form-group'>
                                <label>Email:</label>
                                <input placeholder='Enter Your Email' type='email' name='email' value={email} className='form-control' onChange={e => setEmail(e.target.value)} />
                            </div>
                            <div className='form-group'>
                                <label>Type your Message:</label>
                                <textarea placeholder='Type Your Message Here' type='text' name='message' value={message} onChange={e => setMessage(e.target.value)} className='form-control' />
                            </div>
                            <div className='form-group'>
                                <Button type='submit' onClick={onSubmit}>Submit</Button>
                            </div>
                        </Form>

                    </div>

                    <div className="col-sm-6" id='contactmess'>
                        <Map
                            google={props.google}
                            zoom={8}
                            className="mapstyle" 
                            initialCenter={{ lat: 30.709166, lng: 76.695155 }}
                        />


                    </div>

                </div>
            </div>
            <hr />

        </section>
    )
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyC4QsfQtFnVIshXo-RIaaiFtRc5UU4lGmY'
})(Contactme)