import React,{Component} from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Input, Button, Space, Select } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

const Login = () => {
	return(
	<div className='cmp-login-form'>

		<Form name="form" method='POST'>
			<Form.Item label="Username" required>
	       		 <Input placeholder="Enter Your Name" />
	      			</Form.Item>
	      			<Form.Item label='Email' required>
	      			<Input placeholder="Enter your Email" />
	      			</Form.Item>
	      			
     				 <Form.Item
		   		     label="Password"
		    		    name="password"
						rules={[{ required: true, message: 'Please input your password!' }]}>
		        	<Input.Password placeholder="Enter your Password" />
				    </Form.Item>
				    <Form.Item>
				    <Input type='button' name='submit' />
				    </Form.Item>
      	</Form>
	</div>

		)
}

export default Login;
