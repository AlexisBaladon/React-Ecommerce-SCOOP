import React, { useState } from 'react'

const ModalContext = React.createContext<{
    openLoginModal(): void,
    closeLoginModal(): void,
    isLoginOpened: boolean;
    openRegisterModal(): void,
    closeRegisterModal(): void,
    isRegisterOpened: boolean;
  }>                              
  ({
    openLoginModal: () => {},
    closeLoginModal: () => {},
    isLoginOpened: false,
    openRegisterModal: () => {},
    closeRegisterModal: () => {},
    isRegisterOpened: false,
  });

const ModalProvider: React.FC<{}> = ({children}) => {
  const [isLoginOpened, setLoginOpened] = useState<boolean>(false);
  const [isRegisterOpened, setRegisterOpened] = useState<boolean>(false);
  const [openedCollection, setOpenedCollection] = useState<React.Dispatch<React.SetStateAction<boolean>>[]>([])

  const closeEverything = () => {
    openedCollection.forEach((setOpen) => {
      setOpen(false);
    });
    setOpenedCollection([])
  }

  const openModal = (setOpenedParam: React.Dispatch<React.SetStateAction<boolean>>) => {
    closeEverything();
    setOpenedParam(true);
    setOpenedCollection([...openedCollection, setOpenedParam])
  }
  
  const openLoginModal = () => openModal(setLoginOpened);
  const closeLoginModal = () => closeEverything();
  const openRegisterModal = () => openModal(setRegisterOpened);
  const closeRegisterModal = () => closeEverything();
  
  return (
    <ModalContext.Provider 
      value={{openLoginModal: openLoginModal,
              closeLoginModal: closeLoginModal,
              isLoginOpened: isLoginOpened,
              openRegisterModal: openRegisterModal,
              closeRegisterModal: closeRegisterModal,
              isRegisterOpened: isRegisterOpened,
             }}>
      {children}
    </ModalContext.Provider>
  )
}

export {ModalContext, ModalProvider}