import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';




class Login extends Component {

constructor(){
    super()
this.state={
    name:"",
    email:"",
    password:""
}
}

emailHandler = (e) =>{
    this.setState({
        email:e.target.value
    })
   //alert(e.target.value)
}


passwordHandler = (e) =>{
    this.setState({
        password:e.target.value
    })
    //alert(e.target.value)
}


nameHandler = (e) =>{
    this.setState({
        name:e.target.value
    })
   // alert(e.target.value)
}

ClickHandler = (e) =>{
e.preventDefault();


}


    render(){
    return (

        <div className='container'>
            <form method="POST">
                <div className='Form-Group'>
                    <label>Username:</label>
                    <input type='text' className='Form-Control' name='name' onChange={this.nameHandler} />
                </div>
                <div className='Form-Group'>
                    <label>Email:</label>
                    <input type='text' className='Form-Control' name='email' onChange={this.emailHandler}  />
                </div>
                <div className='Form-Group'>
                    <label>Passwords:</label>
                    <input type='text' className='Form-Control' name='password' onChange={this.passwordHandler}  />
                </div>
                <div className='Form-Group'>
                    <label>Gender:</label>
                    <input type="radio" className='Form-Control' value="Male" name="gender" /> Male<br />
                    <input type="radio" className='Form-Control' value="Female" name="gender" /> Female<br />
                    <input type="radio" className='Form-Control' value="Other" name="gender" /> Other
                                                    </div>
                <div className='Form-Group'>
                    <button type='submit' className='btn btn-success' name='button' onClick={this.ClickHandler}>Submit</button>
                </div>
            </form>
        </div>

    )
    }

}

export default Login;