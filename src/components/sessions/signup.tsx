import React, { useRef, useState } from 'react'
import { Alert, Button, CloseButton, Form, Modal } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';

import './signup.css'

interface IProps {
  show: boolean;
  onHide: () => any;
  openLogin: () => any;
  signup: (email: string, password: string) => Promise<any>;
}

const Signup: React.FC<IProps> = ({show, onHide, openLogin, signup}) => {
  interface IAlert {
    message: string;
    variant: string;
  }

  const [alertMessage, setAlertMessage] = useState<IAlert | null>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const password1Ref = useRef<HTMLInputElement>(null);
  const password2Ref = useRef<HTMLInputElement>(null);

  const handleHide = () => {
    setAlertMessage(null);
    onHide();
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
 
    try {
      const [email, password1, password2]: [string | undefined, string | undefined, string | undefined] = 
            [emailRef?.current?.value, password1Ref.current?.value, password2Ref.current?.value];

      if (password1 === undefined) throw new Error("El campo de contraseña debe ser completado");
      if (email     === undefined) throw new Error("El campo de email debe ser completado");
      if (password1 !== password2) throw new Error("Las contraseñas no coinciden");
      if (password1.length < 6) throw new Error("La contraseña debe tener más de 6 dígitos");
      
      signup(email, password1).then(() => {
        setAlertMessage({message: "Cuenta creada satisfactoriamente!", variant: "success"});
        handleHide();
      })
      .catch(error => {
        let errorMessage = "";
        switch(error.code) {
          case "auth/email-already-in-use":
            errorMessage = "El correo seleccionado ya está en uso.";
            break;
          case "auth/weak-password":
            errorMessage = "La contraseña ingresada es demasiado débil. Intente con más de 5 dígitos.";
          break;
          case "auth/invalid-email":
            errorMessage = "El correo ingresado no es una dirección válida.";
          break;
          default:
            errorMessage = "Ha habido un error en el registro de la cuenta";
          break;
        }
        setAlertMessage({message: errorMessage, variant: "danger"});
      });
    }
    catch(err: any) {
      if (err instanceof Error) {
        setAlertMessage({message: err.message, variant: "danger"});
      }
    }
  }

  return <>{(alertMessage?.variant === "success")?
          <Navigate to="/" />
          :
          <Modal id="modal-signup"
                        show={show}
                        aria-labelledby="contained-modal-title-vcenter"
                        centered>
              <Modal.Header id="header-signup">
                <Modal.Title> Registro </Modal.Title>
                <CloseButton variant="white" onClick={handleHide} />
              </Modal.Header>
              <Modal.Body>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="my-2">
                    <Form.Label> Correo electrónico </Form.Label>
                    <Form.Control type="email" ref={emailRef} required></Form.Control>
                  </Form.Group>
                  <Form.Group className="my-2">
                    <Form.Label> Contraseña </Form.Label>
                    <Form.Control type="password" ref={password1Ref} required></Form.Control>
                  </Form.Group>
                  <Form.Group className="my-2">
                    <Form.Label> Confirmar contraseña </Form.Label>
                    <Form.Control type="password" ref={password2Ref} required></Form.Control>
                  </Form.Group>
                  <Button className="w-100 my-4 button-signup-modal" type="submit">Registrarse</Button>
                  <Form.Label>Ya tienes cuenta? <span onClick={openLogin}>Inicia sesión</span></Form.Label>
                  {alertMessage && <Alert variant={alertMessage.variant}>{alertMessage.message}</Alert>}
                </Form>
              </Modal.Body>
          </Modal>
          }
        </>
}

export default Signup;