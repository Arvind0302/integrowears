import React from 'react';
import ProductPage from './pages/ProductPage/ProductPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Payment from './pages/Payment/Payment';
import ContactPage from './pages/ContactPage/ContactPage';
import Signin from './pages/Signin/Signin';
import ProductEditPage from './pages/ProductEditPage/ProductEditPage';
import Footer from './components/Footer/Footer';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import ShippingAddress from './pages/ShippingAddress/ShippingAddress';
import PlaceOderPage from './pages/PlaceOrderPage/PlaceOderPage';
import OrderPage from './pages/OrderPage/OrderPage';
import OrderHistoryPage from './pages/OrderHistoryPage/OrderHistoryPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route path='/products'>
          <ProductPage />
        </Route>
        <Route path='/editproduct'>
          <ProductEditPage />
        </Route>
        <Route path='/signin'>
          <Signin />
        </Route>
        <Route path='/contact'>
          <ContactPage />
        </Route>
        <Route path='/cart/:id?'>
          <ShoppingCart />
        </Route>
        <Route path='/payment'>
          <Payment />
        </Route>
        <Route path='/product/:id'>
          <ProductDetails />
        </Route>
        <Route path='/shipping'>
          <ShippingAddress />
        </Route>
        <Route path='/payment'>
          <Payment />
        </Route>
        <PrivateRoute path='/profile'>
          <ProfilePage />
        </PrivateRoute>
        <Route path='/placeorder'>
          <PlaceOderPage />
        </Route>
        <Route path='/order/:id'>
          <OrderPage />
        </Route>
        <Route path='/orderhitory'>
          <OrderHistoryPage />
        </Route>
        <Route path='*'>
          <ErrorPage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
