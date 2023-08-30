import React from 'react'
import Card from 'react-bootstrap/Card';
import './appcard.css'

function Appcard(props) {
  return (
    <>
         <Card  className='card'>
      <Card.Img variant="top" className='card-image' src={props.image} />
      <Card.Body className='card-body'>
        <Card.Title><h5 className='card-title'>{props.title}</h5></Card.Title>
        <Card.Text>
          <p className='card-text'>{props.text}</p>
        </Card.Text>
        <Card.Text>
          <a href={props.cardlink} className='card-link'>READ MORE »</a> 
        </Card.Text>
      </Card.Body>
      <Card.Footer className='footer'>
        {props.date}
      </Card.Footer>
    </Card>

    </>
  )
}

export default Appcard