import React, { useRef, useState } from 'react'
import { Alert, Button, CloseButton, Form, Modal } from 'react-bootstrap';

import './login.css'

interface IProps {
  show: boolean;
  onHide: () => any;
  login: (email: string, password: string) => Promise<any>;
  openRegister: () => any;
}

const Login: React.FC<IProps> = ({show, onHide, login, openRegister}) => {
  interface IAlert {
    message: string;
    variant: string;
  }

  const [alertMessage, setAlertMessage] = useState<IAlert | null>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    //Prevents page reload
    e.preventDefault();
 
    try {
      //Ref destructuring
      const [email, password1]: [string | undefined, string | undefined] = 
            [emailRef?.current?.value, passwordRef.current?.value];

      if (password1 === undefined) throw new Error("El campo de contraseña debe ser completado");
      if (email === undefined) throw new Error("El campo de email debe ser completado");
      
      login(email, password1);
      onHide();
    }
    catch(err: any) {
      if (err instanceof Error) {
        setAlertMessage({message: err.message, variant: "danger"});
      }
    }
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
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label> Correo electrónico </Form.Label>
            <Form.Control type="email" ref={emailRef} required></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label> Contraseña </Form.Label>
            <Form.Control type="password" ref={passwordRef} required></Form.Control>
          </Form.Group>
          <Button className="button-login-modal w-100 my-4" type="submit">Iniciar Sesión</Button>
          <Form.Label>No tienes cuenta? <span onClick={openRegister}>Regístrate</span></Form.Label>
        </Form>
        {alertMessage && <Alert variant={alertMessage.variant}>{alertMessage.message}</Alert>}
      </Modal.Body>
  </Modal>
}

export default Login;