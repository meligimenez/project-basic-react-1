import React, { useRef, useState } from 'react'
import { Button, Card, Col, Container, Row, ProgressBar as BarProgress, Form, Modal } from 'react-bootstrap'
import MyProgressBar2 from './MyProgressBar2';
import styles from './styles.module.css'


export const MyProgressBar = () => {
  const [now, setNow] = useState(0);
  const [intervalState, setIntervalState] = useState(null)
  const inputRef = useRef(null)
  const [btnDisable, setBtnDisable] = useState(true)
  const [showModal, setShowModal] = useState(false)

  const handleDownload = () => {
    const valueInput = inputRef.current?.value;
    const isValueValid = !isNaN(valueInput) && valueInput > 0 && valueInput <= 100;
    setShowModal(!isValueValid)

    if (intervalState) {
      clearInterval(intervalState)
    }

    if (isValueValid) {
      let interval = setInterval(() => {
        setNow((now) => {
          if (now === +valueInput) {
            clearInterval(interval)
            return now
          }
          return now + 1
        })
      }, 300);
      setIntervalState(interval)
    } else {
      handleReset()
    }
  }

  const handleReset = () => {
    clearInterval(intervalState)
    setNow(0)
  }

  const handleChange = ({ target: { value } }) => {
    setBtnDisable(!!!+value)
  }

  const handleClose = () => {
    setShowModal()
  }


  return (
    <Container>
      <Row className="mt-5">
        <Col xs={12} lg={{ span: 8, offset: 2 }} className="text-center">
          <Card style={{ width: '40rem' }} className='m-auto'>
            <Card.Body style={{ border: 'none' }} >
              <Card.Title>Progress Bar</Card.Title>
              <BarProgress animated now={now} label={`${now}%`} variant='danger' style={{ backgroundColor: '#ffe0e6' }} />
              <MyProgressBar2 now={now} label={`${now}%`} />
              <Form.Control ref={inputRef} placeholder='Tiempo de descarga' className={styles.inputMyProgress} onChange={handleChange}>
              </Form.Control>
              <div className='d-flex justify-content-center grid gap-5 mt-2'>
                <Button onClick={handleDownload} style={{ backgroundColor: 'pink', border: '2px solid #ff009e' }}>Descargar</Button>
                <Button type='reset' onClick={handleReset} style={{ backgroundColor: 'pink', border: '2px solid #ff009e' }} disabled={btnDisable}>Resetear</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Mensaje..</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <>
              {/* cuando termine la carga que mande un mensaje y mas estilo a la barra nuestra */}
              <h2 className="text-danger text-center py-4">
                ERROR.. ❌
              </h2>
              <p className="text-muted fs-4 text-center">
                Solo se acepta valores numéricos. El valor debe ser
                mayor a 0 y menor o igual a 100.
              </p>
            </>
          </Modal.Body>
        </Modal>
      </Row>
    </Container>
  )
}

export default MyProgressBar