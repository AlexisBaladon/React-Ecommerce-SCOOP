import React, { useContext } from 'react'
import { ModalContext } from '../../context/modalContext';

const LoginContainer: React.FC<{}> = ({children}) => {
  const modalContext = useContext(ModalContext);

  const handleOpen = () => modalContext.openLoginModal();
  return <>
    <span onClick={handleOpen}>{children}</span>
  </>
}

export default LoginContainer;