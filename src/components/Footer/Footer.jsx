import React from 'react'
import './Footer.css'
import {  FaGithub, FaHome,  FaLinkedin, FaMailBulk, FaPhone } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "white", marginRight: "5px" }} />
                        <div>
                        <p>Visakhapatnam ,Andhra Pradesh</p>
                            <p>India</p>
                        </div>
                    </div>

                    <div className="phone">
                        <h4><FaPhone size={20} style={{ color: "white", marginRight: "5px" }} /> 9059092003
                        </h4>
                    </div>

                    <div className="email">
                        <h4><FaMailBulk size={20} style={{ color: "white"}} />  goginenijaswanthsai@gmail.com
                        </h4>
                    </div>

                </div>
                <div className="right">
                    <h4>Something about me </h4>
                    <p>I enjoy group discussions and I am aslo enthusiastic to learn new technologies.</p>
                    <div className="social">
                    
                    <a href="https://www.linkedin.com/in/gogineni-jaswanth-sai-239439234/"><FaLinkedin size={30} style={{ color: "white"}} /> </a>
                    <a href="https://github.com/GJaswanthSai"><FaGithub size={30} style={{ color: "white"}} /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
