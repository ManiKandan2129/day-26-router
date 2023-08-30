import React from 'react'
import Appcard from './Appcard'
import './all.css'  


function Datascience() {
  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-6">
                    <Appcard
                        title = "10 Best Data Science Online Courses for Beginners | 2023"
                        text = "In today’s rapidly evolving digital landscape, Data Science has emerged as one of the most"
                        date = "14 August 2023 "
                        image = "./images/ds-one.webp"
                        cardlink = ""
                    ></Appcard>
                </div>
                <div className="col-lg-4 col-md-6">
                    <Appcard
                        title = "Data Science Webinars and Workshops"
                        text = "In today’s world, it’s becoming increasingly important to be knowledgeable in the field of data"
                        date = "9 August 2023"
                        image = "./images/ds-two.webp"
                        cardlink = ""
                    ></Appcard>
                </div>
                <div className="col-lg-4 col-md-6">
                    <Appcard
                        title = "10 Best Data Science Frameworks in 2023"
                        text = "Does data scientists fascinate you? If yes, you must definitely know about data science frameworks."
                        date = "5 August 2023"
                        image = "./images/ds-three.webp"
                        cardlink = ""
                    ></Appcard>
                </div>
                <div className="col-lg-4 col-md-6">
                    <Appcard
                        title = "7 Must-Watch Data Science Focused YouTube Channels for Effective Learning"
                        text = "Data science has become one of the most sought-after skills in the current job market."
                        date = "5 August 2023"
                        image = "./images/ds-four.webp"
                        cardlink = ""
                    ></Appcard>
                </div>
                <div className="col-lg-4 col-md-6">
                    <Appcard
                        title = "Everything about Data Scientist Salary in India | 2023"
                        text = "Are you curious about the highly sought-after field of data science and the potential it"
                        date = "5 August 2023"
                        image = "./images/ds-five.webp"
                        cardlink = ""
                    ></Appcard>
                </div>
                <div className="col-lg-4 col-md-6">
                    <Appcard
                        title = "How Long Would It Take to Learn Data Science?"
                        text = "Have you ever wondered how much time it takes to learn data science? It’s an"
                        date = "5 August 2023 "
                        image = "./images/ds-six.webp"
                        cardlink = ""
                    ></Appcard>
                </div>
            </div>
        </div>
    </>
  )
}

export default Datascience