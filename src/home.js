import React,{Component} from 'react';
import Logo from "image/things.jpg";

class Home extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar">
                <div className="container">
                    <img src={Logo} style={{width:'100%', height:'100%'}}/>


                </div>



                </nav>      
        )
    }
}

export default Home;