import { Container, Row, Col, Button, Toast } from "react-bootstrap"
import { useShow } from "../../hook/useShow"

export const ShowHideMessage = () => {
  const { show, handleShowMessage } = useShow(false)

  return (
    <Container>
      <Row className="mt-5">
        <Col xs={12} md={{ span: 6, offset: 3 }} className="text-center">
          <Button className="mb-2" variant={show ? 'danger' : 'success'} onClick={handleShowMessage} >
            {show ? 'Ocultar' : 'Mostrar'} mensaje
          </Button>
          <Toast show={show} onClose={handleShowMessage} className="m-auto">
            <Toast.Header>
              <strong className="me-auto">ReactJS</strong>
            </Toast.Header>
            <Toast.Body>Primera Clase</Toast.Body>
          </Toast>
        </Col>
      </Row>
    </Container >
  )

}

export default ShowHideMessage