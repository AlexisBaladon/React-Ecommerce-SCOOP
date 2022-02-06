import { Navbar } from "react-bootstrap";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import Header from "../components/header/header";
import ItemDetailContainer from "../components/items/detail/itemDetailContainer";
import ItemListContainer from "../components/items/list/itemListContainer";
import NavBar from "../components/navbar/navbar";
import Error404 from "../components/errors/error404/error404";

const Routes = () => {
  const greeting = "Bienvenido a Scoop, tu tienda de helados favorita!";

  return <div>
      <BrowserRouter>
        <Switch>
            <Route path="/" element={<><NavBar /><ItemListContainer greeting={greeting}/></>} />
            <Route path="/category/:id" element={<><NavBar /><ItemListContainer greeting={greeting}/></>} />
            <Route path="/item/:id" element={<><NavBar /><ItemDetailContainer /></>} />
            <Route path="*" element={<Error404 />} />
        </Switch>
      </BrowserRouter>
  </div>;
}

export default Routes;
