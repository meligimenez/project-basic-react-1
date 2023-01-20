import { useRef, useState } from "react"
import { Container, Row, Col, Button, Toast, Form } from "react-bootstrap"
import { useShow } from "../../../hook/useShow"

export const MyShowHideMessage = () => {
  const { show, handleShowMessage } = useShow(false)
  const inputRef = useRef(null)
  const [fondoImage, setFondoImage] = useState('none')

  const changeImg = () => {
    const valueInput = inputRef.current?.value;
    if (valueInput) {
      setFondoImage(valueInput)
    } else {
      setFondoImage('none')
    }

    console.log('FONDO IMAGE', fondoImage)
    console.log('VALUE INPUT', valueInput)
  }

  return (
    <Container style={{ height: '80vh', background: `url(${fondoImage})`, backgroundSize: 'cover' }}>
      <Row className="mt-5">
        <Col xs={12} md={{ span: 6, offset: 3 }} className="text-center">

          <div className='d-flex justify-content-center grid gap-2 mt-2 mb-2'>
            <Form.Control ref={inputRef} placeholder='Ingrese su fondo'>
            </Form.Control>
            <Button onClick={changeImg} style={{ backgroundColor: 'pink', border: '2px solid #ff009e', }}>Cambiar</Button>
          </div>

          <Button className="mb-2" variant={show ? 'danger' : 'info'} onClick={handleShowMessage} >
            {show ? 'Chauu' : 'Saluda al pingüi'}
          </Button>
          <Toast show={show} onClose={handleShowMessage} className="d-flex flex-column m-auto">
            <Toast.Header>
              <strong className="me-auto">ReactJS</strong>
            </Toast.Header>
            <Toast.Body>
              <img src='https://i.pinimg.com/originals/3e/c8/89/3ec889aa31e793cf94f3f7cc30646757.gif' className="w-100" />
            </Toast.Body>
          </Toast>
        </Col>
      </Row>
    </Container >
  )

}

export default MyShowHideMessage