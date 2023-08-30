import React from 'react'
import Appcard from './Appcard'
import './all.css'  

function Cybersecurity() {
  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-6">
                    <Appcard
                        title = "Cybersecurity Vs Ethical Hacking: Top 10 Differences"
                        text = "Cybersecurity & Ethical hacking and have been key in making sure that your data online"
                        date = "27 December 2022"
                        image = "./images/cs-one.webp"
                        cardlink = ""
                    ></Appcard>
                </div>
                <div className="col-lg-4 col-md-6">
                    <Appcard
                        title = "What is Cybersecurity? Importance and its uses & the growing challenges in 2023!"
                        text = "Look around today, you will witness that we are more reliant on technology and devices"
                        date = "20 December 2022"
                        image = "./images/cs-two.gif"
                        cardlink = ""
                    ></Appcard>
                </div>
                <div className="col-lg-4 col-md-6">
                    <Appcard
                        title = "Top 10 Ethical Hacking Books for Beginner to Advanced"
                        text = "Did you know that according to the University of Maryland hackers attack every 39 seconds"
                        date = "21 November 2022"
                        image = "./images/cs-three.webp"
                        cardlink = ""
                    ></Appcard>
                </div>
                <div className="col-lg-4 col-md-6">
                    <Appcard
                        title = "8 Different Types of Cybersecurity and Threats Involved"
                        text = "Cybersecurity refers to the protection of devices, processes, infrastructure, and assets of the organization from"
                        date = "9 November 2022 "
                        image = "./images/cs-four.webp"
                        cardlink = ""
                    ></Appcard>
                </div>
                <div className="col-lg-4 col-md-6">
                    <Appcard
                        title = "Is coding required for cybersecurity? If yes, how crucial is coding for cybersecurity?"
                        text = "Many people ask how important is coding for cybersecurity, and the lawyerly answer is: Well,"
                        date = "22 June 2022"
                        image = "./images/cs-five.webp"
                        cardlink = ""
                    ></Appcard>
                </div>
                <div className="col-lg-4 col-md-6">
                    <Appcard
                        title = "Top 7 Cyber Security Attacks in Real Life"
                        text = "Cyber security attacks are the type of actions that are designed to destroy, steal, modify,"
                        date = "10 June 2022"
                        image = "./images/cs-six.jpg"
                        cardlink = ""
                    ></Appcard>
                </div>
            </div>
        </div>
    </>
  )
}

export default Cybersecurity