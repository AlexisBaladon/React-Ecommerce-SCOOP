import React, { useState } from 'react'

const ModalContext = React.createContext<{
    openLoginModal(): void,
    closeLoginModal(): void,
    isLoginOpened: boolean;
    openRegisterModal(): void,
    closeRegisterModal(): void,
    isRegisterOpened: boolean;
  }>

  //default values                                    
  ({
    openLoginModal: () => {},
    closeLoginModal: () => {},
    isLoginOpened: false,
    openRegisterModal: () => {},
    closeRegisterModal: () => {},
    isRegisterOpened: false,
  });

//Doesn't let more than one modal to be opened at once
const ModalProvider: React.FC<{}> = ({children}) => {
  const [isLoginOpened, setLoginOpened] = useState<boolean>(false);
  const [isRegisterOpened, setRegisterOpened] = useState<boolean>(false);
  const [openedCollection, setOpenedCollection] = useState<React.Dispatch<React.SetStateAction<boolean>>[]>([])

  // Auxiliar functions
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
/*
  const closeModal = (setOpenedParam: React.Dispatch<React.SetStateAction<boolean>>) => {
    const setOpened = openedCollection.find(set => set === setOpenedParam);
    if (setOpened !== undefined) {
      setOpened(false);

      let openedCol = openedCollection.slice();
      openedCol.filter(set => set !== setOpened);
      setOpenedCollection(openedCol);
    }
  }*/
  
  // Sent functions
  const openLoginModal = () => openModal(setLoginOpened);
  const closeLoginModal = () => closeEverything();

  //CLOSE MODAL INSTEAD OF CLOSE X MODAL
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