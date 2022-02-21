import React, { useRef, useState } from 'react'
import { Button, Card, CloseButton, Form, Modal } from 'react-bootstrap';

import './login.css'

interface IProps {
  show: boolean;
  onHide: () => any;
  openRegister: () => any;
}
const Login: React.FC<IProps> = ({show, onHide, openRegister}) => {

  const email = useRef<HTMLDivElement|null>(null);
  const password = useRef<HTMLDivElement|null>(null);

  const handleEmailRef = (ref: HTMLInputElement) => {
    email.current = ref;
  }

  const handlePasswordRef = (ref: HTMLInputElement) => {
    password.current = ref;
  }

  return <Modal id="modal-login"
                show={show}
                aria-labelledby="contained-modal-title-vcenter"
                centered>
      <Modal.Header id="header-login">
        <Modal.Title> Iniciar sesion </Modal.Title>
        <CloseButton variant="white" onClick={onHide} />
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label> Correo electrónico </Form.Label>
            <Form.Control type="email" ref={handleEmailRef} required></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label> Contraseña </Form.Label>
            <Form.Control type="password" ref={handlePasswordRef} required></Form.Control>
          </Form.Group>
          <Button className="w-100 my-4" type="submit">Iniciar Sesión</Button>
          <Form.Label>No tienes cuenta? <span onClick={openRegister}>Registrate</span></Form.Label>
        </Form>
      </Modal.Body>
  </Modal>
}

export default Login;