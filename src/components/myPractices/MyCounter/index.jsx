import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

export function MyCounter() {
  const [number, setNumber] = useState(0)

  const handleMore = () => {
    setNumber(number + 1)
  }

  const handleLess = () => {
    if (number > 0) {
      setNumber(number - 1)
    }
  }

  return (
    <Container className='mt-3' >
      <Col className='d-flex justify-content-center'>
        <Button onClick={handleLess} style={{ width: '50px', borderRadius: '20px' }}>-</Button>
        <p className='mx-4 my-2 '>{number}</p>
        <Button onClick={handleMore} style={{ width: '50px', borderRadius: '20px' }}>+</Button>
      </Col>
    </Container>
  )
}

export default MyCounter