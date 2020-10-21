import React from 'react';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faTwitter, faGithub
 } from "@fortawesome/free-brands-svg-icons"




const Header = (props) => {
    let resumeData = props.resumeData;
    return (
        <React.Fragment>
            <header id='home'>
                <nav className='nac navbar bg-dark' id='nav-wrap'>
                    <ul id='nav' className='nav'>
                        <li><Button type="link" href='#home'>Home</Button></li>
                        <li><Button type="link" href='#resume'>Resume</Button></li>
                        <li><Button type="link" href='#about'>About</Button></li>
                        <li><Button type="link" href='#portfolio'>Works</Button></li>
                        <li><Button type="link" href='#contactme'>Contact me</Button></li>
                        {/* {<li><Button type="link" href='#contact'>Testimonials</Button></li>} */}
                    </ul>
                    <div className='socialicon'>
                        <FontAwesomeIcon icon={faFacebook} size="2x" spin />
                        <FontAwesomeIcon  url={'https://www.instagram.com/gauravkumar5467/'} icon={faInstagram} size="2x" spin />
                        <FontAwesomeIcon icon={faTwitter} size="2x" spin />
                        <FontAwesomeIcon icon={faGithub} size="2x" spin />
                        
                    </div>
                </nav>
            </header>

        </React.Fragment >

    )
}

export default Header;