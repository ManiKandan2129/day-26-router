import React from 'react'
import Appcard from './Appcard'
import './all.css'  

function Fullstack() {
  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-6">
                    <Appcard
                        title = "The Top 10 Tools Every Full Stack Developer Should Master in 2023"
                        text = "‍As a full stack developer, having the right set of tools is crucial for your"
                        date = "5 August 2023"
                        image = "./images/fsd-one.webp"
                        cardlink = ""
                    ></Appcard>
                </div>
                <div className="col-lg-4 col-md-6">
                    <Appcard
                        title = "The Ultimate Guide to Real-World Full Stack Development Applications"
                        text = "Full stack development has become increasingly popular in recent years, with companies seeking professionals who"
                        date = "5 August 2023"
                        image = "./images/fsd-two.webp"
                        cardlink = ""
                    ></Appcard>
                </div>
                <div className="col-lg-4 col-md-6">
                    <Appcard
                        title = "Best Ways to Learn Full Stack Development in 2023"
                        text = "Full stack development is and will be a promising and an in-demand career in the"
                        date = "4 August 2023"
                        image = "./images/fsd-three.webp"
                        cardlink = ""
                    ></Appcard>
                </div>
                <div className="col-lg-4 col-md-6">
                    <Appcard
                        title = "How Long Would It Take to Be a Full Stack Developer?"
                        text = "Have you ever wondered how much time it would take to become a skilled Full"
                        date = "4 August 2023"
                        image = "./images/fsd-four.webp"
                        cardlink = ""
                    ></Appcard>
                </div>
                <div className="col-lg-4 col-md-6">
                    <Appcard
                        title = "Top Skills To Become a Full Stack Developer in 2023"
                        text = "Are you interested in becoming a great full-stack developer? If so, then you’re at the"
                        date = "4 August 2023"
                        image = "./images/fsd-five.webp"
                        cardlink = ""
                    ></Appcard>
                </div>
                <div className="col-lg-4 col-md-6">
                    <Appcard
                        title = "Top Full Stack Development Webinars and Workshops"
                        text = "Are you keen to elevate your web development skills and master the art of Full"
                        date = "29 July 2023"
                        image = "./images/fsd-six.jpg"
                        cardlink = ""
                    ></Appcard>
                </div>
            </div>
        </div>
    </>
  )
}

export default Fullstack