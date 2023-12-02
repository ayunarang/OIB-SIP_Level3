import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Components/Home/Home.jsx';
import SignUp from './Components/SignUp/SignUp.jsx';
import LogIn from './Components/LogIn/LogIn.jsx';
import Cart from './Components/Cart/Cart.jsx';
import Orders from './Components/Orders/Orders.jsx';
import NewOrders from './Components/NewOrders/NewOrders.jsx';
import Custompizza from './Components/Custompizza/Custompizza.jsx';
import ForgotPassword from './Components/ForgotPassword/ForgotPassword.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
      
        <Router>
          
          <div>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/login" element={<LogIn />} />
              <Route exact path="/createuser" element={<SignUp />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/neworders" element={<NewOrders />} />
              <Route path="/custompizza" element={<Custompizza />} />
              <Route path="/forgotpassword" element={<ForgotPassword/>}/>
            </Routes>
            <ToastContainer />
          </div>
          
        </Router>
      
  );
}

export default App;
