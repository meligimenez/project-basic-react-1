import React, { useRef, useState } from 'react'
import { Button, Card, Col, Container, Row, ProgressBar as BarProgress, Form, Alert } from 'react-bootstrap'
import './myProgressBar.css'

export const MyProgressBar = () => {
  const [now, setNow] = useState(0);
  const [intervalState, setIntervalState] = useState(null)
  const inputRef = useRef(null)

  const handleDownload = () => {
    const valueInput = inputRef.current?.value
    let interval = setInterval(() => {
      setNow((now) => {
        if (now === +valueInput) {
          clearInterval(interval)
          return now
        }
        return now + 1
      })
    }, 500);
    setIntervalState(interval)
  }

  const handleReset = () => {
    clearInterval(intervalState)
    setNow(0)
  }


  return (
    <Container>
      <Row className="mt-5">
        <Col xs={12} lg={{ span: 8, offset: 2 }} className="text-center">
          <Card style={{ width: '40rem' }} className='m-auto'>
            <Card.Body style={{ border: 'none' }} >
              <Card.Title>Progress Bar</Card.Title>
              <BarProgress animated now={now} label={`${now}%`} variant='danger' style={{ backgroundColor: '#ffe0e6' }} />
              <Form.Control id='input' ref={inputRef} placeholder='Tiempo de descarga' className='my-3'>
              </Form.Control>
              <div className='d-flex justify-content-center grid gap-5' >
                <Button onClick={handleDownload} style={{ backgroundColor: 'pink', border: '2px solid #ff009e' }}>Descargar</Button>
                <Button type='reset' onClick={handleReset} style={{ backgroundColor: 'pink', border: '2px solid #ff009e' }}>Resetear</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default MyProgressBar