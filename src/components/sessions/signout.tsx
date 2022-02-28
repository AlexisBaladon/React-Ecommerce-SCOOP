import React, { useRef, useState } from 'react'
import { Alert, Button, CloseButton, Form, Modal } from 'react-bootstrap';

import './signup.css'

interface IProps {
  show: boolean;
  onHide: () => any;
  signout: () => any;
}

const SignoutModal: React.FC<IProps> = ({show, onHide, signout}) => {
  interface IAlert {
    message: string;
    variant: string;
  }

  const [alertMessage, setAlertMessage] = useState<IAlert | null>(null);

  const handleHide = () => {
    setAlertMessage(null);
    onHide();
  }

  return <Modal id="modal-signup"
                show={show}
                aria-labelledby="contained-modal-title-vcenter"
                centered>
      <Modal.Header id="header-signup">
        <Modal.Title> Registro </Modal.Title>
        <CloseButton variant="white" onClick={handleHide} />
      </Modal.Header>
      <Modal.Body>
          <Modal.Dialog>Estás seguro que quieres cerrar sesión?</Modal.Dialog>
          <Button>Si</Button>
          <Button>Cancelar</Button>
      </Modal.Body>
  </Modal>
}

export default SignoutModal;