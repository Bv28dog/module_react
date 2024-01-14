import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { Home } from "./pages/home/home";
import { Products } from "./pages/products/products";
import { ProductDetails } from "./pages/productsDetails/productDetails";
import { ShoppingCart } from "./pages/shoppingCart/shoppingCart";
import { Layout } from "./components/layout";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/products">
              <Products />
            </Route>
            <Route path="/productDetails/:id">
              <ProductDetails />
            </Route>
            <Route path="/shoppingCart">
              <ShoppingCart />
            </Route>
          </Switch>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
