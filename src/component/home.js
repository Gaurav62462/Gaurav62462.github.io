import React,{Component} from 'react';
//import Logo from "./image/things.jpg";



  import { FacebookShareButton,EmailShareButton,EmailIcon,
    FacebookIcon,
    RedditIcon, } from "react-share"
   

class Home extends Component{
    render(){
        return(
            <div>
    
    <FacebookShareButton url="#">
        <FacebookIcon logoFillColor="white" />
    </FacebookShareButton>
    <EmailShareButton url="#">
        <EmailIcon logoFillColor="white" />
    </EmailShareButton>
                      
                </div>
        )
    }
}

export default Home;