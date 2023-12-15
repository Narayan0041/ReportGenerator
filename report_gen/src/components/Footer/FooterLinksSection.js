import React from 'react'
import { Link } from 'react-router-dom'

export default function FooterLinksSection() {
    return (
        <div>
            <div className="footerLinksSection">
                <div className="footerLinksContainer">
                        <div className="footerLogoSection">
                            <div>
                            <img src='https://techpaathshala.com/assets/images/general/logo.png' alt='LogoImage'/>
                            </div>
                            <div className='footerLogoCaption'>
                                <p>Effortlessly generate comprehensive reports with our user-friendly website, simplifying data analysis and presentation.</p>
                            </div>
                        </div>
                        <div className="footerLinks">
                            <p>Sections</p>
                            <a href='/'>HOME</a>
                            <a href='/'>About</a>
                            <a href='/'>Contact</a>
                          <Link to="terms&condition">Terms of Servic</Link>
                            <Link to="privacypolicy">Privacy Policy</Link>
                        </div>
                        <div className="footerLinks">
                            <p>Sections</p>
                            <a href='/'>HOME</a>
                            <a href='/'>About</a>
                            <a href='/'>Contact</a>
                            <a href='/'> <i className="fa-regular fa-envelope"></i> Terms of Service</a>
                            <a href='/'>Privacy Policy</a>
                        </div>
                       <div className='footerSuggestionSection'>
                        <p>Do you have any feedback for us?</p>
                        <textarea id='footerSuggestion' placeholder='Enter your Feedback here...' className='footerSuggestion' rows={2} cols={40}></textarea>
                       </div>
                </div>
            </div>
        </div>
    )
}
