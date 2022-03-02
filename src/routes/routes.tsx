import { useContext, useState } from "react";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";

import { ModalContext } from "../context/modalContext";
import { SessionContext } from "../context/sessionContext";
import NavBar from "../components/navbar/navbar";
import ItemDetailContainer from "../components/items/detail/itemDetailContainer";
import ItemListContainer from "../components/items/list/itemListContainer";
import Error from "../components/errors/error";
import PurchaseHistoryContainer from "../components/account/purchaseHistoryContainer";
import Signup from "../components/sessions/signup";
import Login from "../components/sessions/login";
import Cart from "../components/cart/cart";
import Footer from "../components/footer/footer";

const Routes = () => {
  const [hasNavbar, setHasNavbar] = useState<boolean>(true);
  const modalContext = useContext(ModalContext);
  const sessionContext = useContext(SessionContext);
  const {openLoginModal, closeLoginModal, isLoginOpened, openRegisterModal, closeRegisterModal, isRegisterOpened} = modalContext;
  const {signup, login} = sessionContext;
  
  const e404 = {title: "Error 404", description: "Página no encontrada."}

  return <div>
    <BrowserRouter>
      {/* Global modals */}
      <Signup show={isRegisterOpened} onHide={closeRegisterModal} openLogin={openLoginModal} signup = {signup}/>
      <Login  show={isLoginOpened}    onHide={closeLoginModal} login={login} openRegister={openRegisterModal} />

      {/* Main app */}
      {hasNavbar && <NavBar />}
      <Switch>
        <Route path="/"             element={<ItemListContainer                           /> } />
        <Route path="/category/:id" element={<ItemListContainer                           /> } />
        <Route path="/item/:id"     element={<ItemDetailContainer                         /> } />
        <Route path="/cart"         element={<Cart                                        /> } />
        <Route path="/history"      element={<PurchaseHistoryContainer                    /> } />
        <Route path="*"             element={<Error {...e404} setHasNavbar={setHasNavbar} /> } />
      </Switch>
      <Footer />
    </BrowserRouter>
  </div>;
}

export default Routes;