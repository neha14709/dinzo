import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './component/login';
import Signup from './component/signup';
import Contact from './component/contact';
import Checkout from './component/checkout';
import Cart from './component/cart';
function App() {
  return (
    <>
    
          <Router>
            <Routes>
              <Route path='/login' element={<Login />}> </Route>
              <Route path='/signup' element={<Signup />}> </Route>
              <Route path='/contact' element={<Contact />}> </Route>
              <Route path='/checkout' element={<Checkout />}> </Route>
              <Route path='/cart' element={<Cart />}> </Route>

            </Routes>
          </Router>
    </>

  );
}

export default App;
