import React from 'react';
import ProductPage from './pages/ProductPage/ProductPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';
import Product from './components/ProductDetails/Product';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Payment from './pages/Payment/Payment';
import ContactPage from './pages/ContactPage/ContactPage';
import Signin from './pages/Signin/Signin';
import ProductEditPage from './pages/ProductEditPage/ProductEditPage';
import Footer from './components/Footer/Footer';

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
          <Product />
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
