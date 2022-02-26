import React, { useContext } from 'react'
import { ModalContext } from '../../context/modalContext';
import { SessionContext } from '../../context/sessionContext';
import Login from './login';

const LoginContainer: React.FC<{}> = ({children}) => {
  const modalContext = useContext(ModalContext);
  const sessionContext = useContext(SessionContext);

  const handleOpen = () => modalContext.openLoginModal();
  const handleClose = () => modalContext.closeLoginModal();
  const show = modalContext.isLoginOpened;
  const openRegister = modalContext.openRegisterModal;
  const login = sessionContext.login;

  return <>
    {/* Children is needed to abstract the setShow hook from its parent */}
    <span onClick={handleOpen}>{children}</span>
    <Login show={show} onHide={handleClose} login={login} openRegister={openRegister} />
  </>
}

export default LoginContainer;