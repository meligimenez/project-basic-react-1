import React from 'react'
import { Button, Form } from 'react-bootstrap'

export function FormTask({ onChange, inputsValue, onSubmit, refForm }) {
  return (
    <Form onSubmit={onSubmit} ref={refForm}>
      <Form.Group className="mb-3" >
        <Form.Label>Titulo</Form.Label>
        <Form.Control type="text" placeholder="Ingresar un titulo" value={inputsValue.title} onChange={onChange} name='title' />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Imagen</Form.Label>
        <Form.Control type="text" placeholder="Ingresa un url" value={inputsValue.img} onChange={onChange} name='img' />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Descripcion</Form.Label>
        <Form.Control type="text" as={"textarea"} placeholder="Ingrese una descripcion" value={inputsValue.description} onChange={onChange} name='description' />
      </Form.Group>


      <Button variant="info" type="submit">
        Agregar
      </Button>
      <Button variant="danger" type="reset">
        Reiniciar
      </Button>
    </Form>
  )
}

export default FormTask
