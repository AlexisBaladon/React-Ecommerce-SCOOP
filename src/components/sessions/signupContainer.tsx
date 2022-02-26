import React, { useContext } from 'react'
import { ModalContext } from '../../context/modalContext';

const SignupContainer: React.FC<{}> = ({children}) => {
  const modalContext = useContext(ModalContext);

  const handleOpen = () => modalContext.openRegisterModal();

  return <>
    <span onClick={handleOpen}>{children}</span>
  </>
}

export default SignupContainer;