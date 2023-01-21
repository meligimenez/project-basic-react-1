/* import React, { useState } from 'react' */
import { useRef } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useForm } from '../../hook/useForm'
import { FormTask } from './Form'

export function TaskManager() {
  const refForm = useRef(null)
  const [inputsValue, setInputsValue, handleChangeInputsValue, reset] = useForm({}, refForm)
  /*   const [inputsValue, setInputsValue] = useState({})
    const handleChangeInputsValue = ({ target: { name, value } }) =>
      setInputsValue({
        ...inputsValue,
        [name]: value
      })
   */
  const handleSubmit = (e) => {
    e.preventDefault()
    reset()
  }

  return (
    <Container className="mt-5">
      <Row>
        <Col sm={12} lg={3}>
          <FormTask onChange={handleChangeInputsValue} inputsValue={inputsValue} onSubmit={handleSubmit} refForm={refForm} />
        </Col>
        <Col sm={12} lg={9}>

        </Col>
      </Row>
    </Container >
  )
}

export default TaskManager