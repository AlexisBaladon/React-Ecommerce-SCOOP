import { Navbar } from "react-bootstrap";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import ItemListContainer from "../components/items/itemListContainer";

const Routes = () => {
  return <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
            <Route path="/" element={<ItemListContainer greeting="Bienvenido a Scoop, tu tienda de helados favorita!"/>} />
            <Route path="/home" element={<ItemListContainer greeting="No hay lugar como el hogar"/>} />
            <Route path="/home/123" element={<ItemListContainer greeting="No hay lugar como el hogar"/>} />
            <Route path="*" element={<h1>asd2</h1>} />
        </Switch>
      </BrowserRouter>
  </div>;
}

export default Routes;
