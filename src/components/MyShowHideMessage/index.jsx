import { Container, Row, Col, Button, Toast } from "react-bootstrap"
import { useShow } from "../../hook/useShow"

export const MyShowHideMessage = () => {
  const { show, handleShowMessage } = useShow(false)

  return (
    <Container>
      <Row className="mt-5">
        <Col xs={12} md={{ span: 6, offset: 3 }} className="text-center">
          <Button className="mb-2" variant={show ? 'danger' : 'success'} onClick={handleShowMessage} >
            {show ? 'Chauu' : 'Saluda al pingüi'}
          </Button>
          <Toast show={show} onClose={handleShowMessage} className="d-flex flex-column m-auto">
            <Toast.Header>
              <strong className="me-auto">ReactJS</strong>
            </Toast.Header>
            <Toast.Body>Primera Clase
              <img src='https://i.pinimg.com/originals/3e/c8/89/3ec889aa31e793cf94f3f7cc30646757.gif' className="w-100" />
            </Toast.Body>
          </Toast>
        </Col>
      </Row>
    </Container >
  )

}

export default MyShowHideMessage