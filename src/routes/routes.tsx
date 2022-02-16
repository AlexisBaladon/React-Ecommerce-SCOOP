import { useState } from "react";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";

import NavBar from "../components/navbar/navbar";
import ItemDetailContainer from "../components/items/detail/itemDetailContainer";
import ItemListContainer from "../components/items/list/itemListContainer";
import Error404 from "../components/errors/error404/error404";
import CartContainer from "../components/cart/cartContainer";

const Routes = () => {

  /*
   * Allows the use of NavBar in most of the pages
   * without unnecessary rendering
   */
  const [hasNavbar, setHasNavbar] = useState(true);

  return <div>

      <BrowserRouter>
        {hasNavbar? <NavBar /> : null }
        <Switch>
          <Route path="/"             element={<ItemListContainer                    /> } />
          <Route path="/category/:id" element={<ItemListContainer                    /> } />
          <Route path="/item/:id"     element={<ItemDetailContainer                  /> } />
          <Route path="/cart"         element={<CartContainer                        /> } />
          <Route path="*"             element={<Error404 setHasNavbar={setHasNavbar} /> } />
        </Switch>
      </BrowserRouter>
  </div>;
}

export default Routes;