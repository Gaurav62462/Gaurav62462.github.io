import React from 'react';
import { Button, Form } from 'antd';


const Contactme = (props) => {
    let resumeData = props.resumeData;
    return (
        <div className="col-sm-6">
            <Form>
                <div className='form-group'>
                    <label>Name:</label>
                    <input type='text' name='name' className='form-control' />
                </div>
                <div className='form-group'>
                    <label>Email:</label>
                    <input type='email' name='name' className='form-control' />
                </div>
                <div className='form-group'>
                    <label>Type your Message:</label>
                    <textarea type='text' name='name' className='form-control' />
                </div>
                <div className='form-group'>
                    <Button type='submit'>Submit</Button>
                </div>

            </Form>
        </div>
    )
}

export default Contactme;