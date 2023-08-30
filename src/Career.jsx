import React from 'react'
import Appcard from './Appcard'
import './all.css'  

function Career() {
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-6">
                    <Appcard
                        title = "Business Analyst – An Insight into Their Life"
                        text = "Have you ever wondered how business tends to maintain everything in proper order despite having"
                        date = "5 July 2023 "
                        image = "./images/cr-one.jpg"
                        cardlink = ""
                    ></Appcard>
                </div>
                <div className="col-lg-4 col-md-6">
                    <Appcard
                        title = "What is Production Management | The Ultimate Guide"
                        text = "In today’s constantly evolving business landscape, production managers are essential to the success of any"
                        date = "1 July 2023 "
                        image = "./images/cr-two.jpg"
                        cardlink = ""
                    ></Appcard>
                </div>
                <div className="col-lg-4 col-md-6">
                    <Appcard
                        title = "Top Career Options in India in 2023"
                        text = "In today’s rapidly changing world, career choices carry immense significance. As the job market undergoes"
                        date = "27 June 2023 "
                        image = "./images/cr-three.jpg"
                        cardlink = ""
                    ></Appcard>
                </div>
                <div className="col-lg-4 col-md-6">
                    <Appcard
                        title = "7 Powerful Steps to Land a Software Developer Internship"
                        text = "Software development is set to grow at the rate of 25% between 2021-2031. An illustrious"
                        date = "2 June 2023 "
                        image = "./images/cr-four.webp"
                        cardlink = ""
                    ></Appcard>
                </div>
                <div className="col-lg-4 col-md-6">
                    <Appcard
                        title = "As a Software Engineer, How Do I Shift My Career to DevOps?"
                        text = "DevOps is the blend of Software Development & IT Operations that accelerates the development of"
                        date = "31 May 2023 "
                        image = "./images/cr-five.jpg"
                        cardlink = ""
                    ></Appcard>
                </div>
                <div className="col-lg-4 col-md-6">
                    <Appcard
                        title = "How to Become a Successful QA Automation Tester"
                        text = "It is not a secret that top tech companies have been transitioning from manual to"
                        date = "25 May 2023"
                        image = "./images/cr-six.jpg"
                        cardlink = ""
                    ></Appcard>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Career