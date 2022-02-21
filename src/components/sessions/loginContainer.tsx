import React, { useState, ReactChild, ReactChildren, useContext } from 'react'
import { ModalContext } from '../../context/modalContext';
import Login from './login';

interface IProps {
  initialShow: boolean;
  children: ReactChild | ReactChildren;
}

const LoginContainer: React.FC<IProps> = ({initialShow, children}) => {
  const modalContext = useContext(ModalContext);

  const handleOpen = () => modalContext.openLoginModal();
  const handleClose = () => modalContext.closeLoginModal();
  const show = modalContext.isLoginOpened;
  const openRegister = modalContext.openRegisterModal;

  return <>
    {/* Children is needed to abstract the setShow hook from its parent */}
    <span onClick={handleOpen}>{children}</span>
    <Login show={show} onHide={handleClose} openRegister={openRegister} />
  </>
}

export default LoginContainer;