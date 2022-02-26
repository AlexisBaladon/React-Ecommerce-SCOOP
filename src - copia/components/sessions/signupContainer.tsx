import React, { useContext } from 'react'
import { ModalContext } from '../../context/modalContext';
import { SessionContext } from '../../context/sessionContext';
import Signup from './signup';

const SignupContainer: React.FC<{}> = ({children}) => {
  const modalContext = useContext(ModalContext);
  const sessionContext = useContext(SessionContext);

  const handleOpen = () => modalContext.openRegisterModal();
  const handleClose = () => modalContext.closeRegisterModal();
  const show = modalContext.isRegisterOpened;
  const openLogin = modalContext.openLoginModal;
  const signup = (email: string, password: string): Promise<any> => sessionContext.signup(email, password);

  return <>
    {/* Children is needed to abstract modalContext from its parent */}
    <span onClick={handleOpen}>{children}</span>
    <Signup show={show} onHide={handleClose} openLogin={openLogin} signup = {signup}/>
  </>
}

export default SignupContainer;