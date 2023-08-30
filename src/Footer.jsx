import React from 'react'
import './footer.css'
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faSquareInstagram, faLinkedin, faSquareTwitter, faTelegram, faYoutube } from "@fortawesome/free-brands-svg-icons"

function Footer() {
  return (
    <>
        <div className="container" id='footer'>
            <div className="row" id='row'>
                <div className="col-md-4" id='left-col'>
                  <div className="left-content">
                    <div className="col-one">
                    <img src='./images/iconguvi.webp' alt = "icon" className='img'></img>
                    <div className="button">
                       <Button variant="outline-dark" className='btn'>Refer & Earn</Button>
                    </div>
                    </div>
                    <div className="col-two">
                    <div className='follow-text'>Follow Us On</div>
                    <div className="icon1">
                    <FontAwesomeIcon icon={faFacebook} className='icons' />
                    <FontAwesomeIcon icon={faSquareInstagram} className='icons' />
                    <FontAwesomeIcon icon={faLinkedin} className='icons' />
                    </div>
                    <div className="icon2">
                    <FontAwesomeIcon icon={faSquareTwitter} className='icons' />
                    <FontAwesomeIcon icon={faTelegram} className='icons' />
                    <FontAwesomeIcon icon={faYoutube} className='icons' />
                    </div>
                    </div>
                    </div>
                </div>
                <div className="col-md-8" id='right-col'>
                  <div className="row">
                    <div className="col-4" id='right-txt'>
                      <h5 className='f-title'>Course Library</h5>
                      <h6 className='f-sub'>Premium Courses</h6>
                      <h6 className='f-sub'>Free Courses</h6>
                      <h6 className='f-sub'>Library</h6>
                    </div>
                    <div className="col-4" id='right-txt'>
                      <h5 className='f-title'>Practise</h5>
                      <h6 className='f-sub'>Codekata</h6>
                      <h6 className='f-sub'>Webkata</h6>
                      <h6 className='f-sub'>Ide</h6>
                    </div>
                    <div className="col-4" id='right-txt'>
                      <h5 className='f-title'>Products</h5>
                      <h6 className='f-sub'>Hacker Kid</h6>
                      <h6 className='f-sub'>GUVI for Corporates</h6>
                    </div>
                    <div className="col-4" id='right-txt'>
                      <h5 className='f-title'>ZEN CLASS Live Classes</h5>
                      <h6 className='f-sub'>Full Stack Development</h6>
                      <h6 className='f-sub'>IIT-M Advanced Programming & Data Science Program</h6>
                      <h6 className='f-sub'>Automation and Testing Program</h6>
                    </div>
                    <div className="col-4" id='right-txt'>
                      <h5 className='f-title'>Resources</h5>
                      <h6 className='f-sub'>Rewards</h6>
                      <h6 className='f-sub'>Refer a Friend</h6>
                      <h6 className='f-sub'>Blogs</h6>
                      <h6 className='f-sub'>Forum Support</h6>
                    </div>
                    <div className="col-4" id='right-txt'>
                      <h5 className='f-title'>Company</h5>
                      <h6 className='f-sub'>Refund Policy</h6>
                      <h6 className='f-sub'>FAQs</h6>
                      <h6 className='f-sub'>Contact Us</h6>
                    </div>
                  </div>
                </div>
            </div>
            <div className="row">
              <hr className='vertical'></hr>
              <div className="col" id='bottom-col'>
                <h6 className='bottom-txt'>Terms and Conditions | Privacy Policy</h6>
                <h6 className='bottom-txt'>© GUVI Geeks Network Pvt. Ltd.</h6>
              </div>
            </div>
        </div>
    </>
  )
}

export default Footer