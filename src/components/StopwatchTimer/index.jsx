import React from 'react'
import { useState } from 'react';
import { Button, ButtonGroup, Card, Col, Container, Row } from 'react-bootstrap';

const oneOrTwoNum = (num) => num > 9 ? num : `0${num}`;
const pluralSingular = (num) => num > 1 ? 's' : '';

export function StopwatchTimer() {
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [hours, setHours] = useState(0)

  const [velocity, setVelocity] = useState(0)
  const [velocityName, setVelocityName] = useState('')

  const [stateIntervalSeconds, setStateIntervalSeconds] = useState(null)
  const [stateIntervalMinutes, setStateIntervalMinutes] = useState(null)
  const [stateIntervalHours, setStateIntervalHours] = useState(null)

  const handleStart = () => {
    if (stateIntervalSeconds && stateIntervalMinutes && stateIntervalHours) {
      return;
    }

    const intervalHours = setInterval(() => {
      setHours((h) => {
        return h + 1
      })
    }, velocity ? (61000 * 60) / velocity : (61000 * 60));

    const intervalMinutes = setInterval(() => {
      setMinutes((m) => {
        if (m === 59) {
          return 0
        }
        return m + 1
      })
    }, velocity ? 60000 / velocity : 60000);

    const intervalSeconds = setInterval(() => {
      setSeconds((s) => {
        if (s === 59) {
          return 0
        }
        return s + 1
      })
    }, velocity ? 1000 / velocity : 1000);

    setStateIntervalHours(intervalHours)
    setStateIntervalMinutes(intervalMinutes)
    setStateIntervalSeconds(intervalSeconds)
  }

  const handleStop = () => {
    if (!stateIntervalSeconds && !stateIntervalMinutes && !stateIntervalHours) {
      return;
    }
    clearInterval(stateIntervalHours)
    clearInterval(stateIntervalMinutes)
    clearInterval(stateIntervalSeconds)

    setStateIntervalHours(null)
    setStateIntervalMinutes(null)
    setStateIntervalSeconds(null)
  }

  const handleReset = () => {
    if (!stateIntervalSeconds && !stateIntervalMinutes && !stateIntervalHours) {
      return;
    }
    handleStop()
    setSeconds(0)
    setMinutes(0)
    setHours(0)

  }

  const handleVelocity = (vel, velText) => {
    setVelocity(vel)
    setVelocityName(velText)
    handleStop()
  }

  return (
    <Container>
      <Row className="mt-5">
        <Col xs={12} md={{ span: 6, offset: 3 }} className="text-center">
          <ButtonGroup aria-label="Basic example" className='d-block my-1'>
            <Button variant="outline-success" onClick={handleStart}>Comenzar</Button>
            <Button variant="outline-danger" onClick={handleStop}>Detener</Button>
            <Button variant="outline-dark" onClick={handleReset}>Reiniciar</Button>
          </ButtonGroup>
          {velocity}
          <ButtonGroup aria-label="Basic example">
            <Button variant="outline-dark" className={velocityName === 'min' && 'active'} onClick={() => handleVelocity(0, 'min')} >Min</Button>
            <Button variant="outline-dark" className={velocityName === 'x2' && 'active'} onClick={() => handleVelocity(2, 'x2')} >x2</Button>
            <Button variant="outline-dark" className={velocityName === 'x3' && 'active'} onClick={() => handleVelocity(4, 'x4')} >x4</Button>
            <Button variant="outline-dark" className={velocityName === 'x4' && 'active'} onClick={() => handleVelocity(6, 'x6')} >x6</Button>
            <Button variant="outline-dark" className={velocityName === 'max' && 'active'} onClick={() => handleVelocity(10, 'max')} >Max</Button>
          </ButtonGroup>
          <Card style={{ width: '25rem' }} className='m-auto my-3'>
            <Card.Body>
              <Card.Title>Stopwatch / Timer </Card.Title>
              <Card.Text>
                {oneOrTwoNum(hours)} hora{pluralSingular(hours)} - {minutes} minuto{pluralSingular(minutes)} - {seconds} segundo{pluralSingular(seconds)}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              {oneOrTwoNum(hours)}:{minutes}:{seconds}
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container >
  )
}



export default StopwatchTimer