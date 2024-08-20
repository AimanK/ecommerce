import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './layout/Navbar';
import CustomerHome from './pages/CustomerHome';
import ProductHome from './pages/ProductHome';
import AddCustomer from './customers/AddCustomer';
import ViewCustomer from './customers/ViewCustomer';
import Shop from './pages/Shop';
import AboutUs from './pages/AboutUs';
import Cart from './pages/Cart';
import Lighting from './productpages/Lighting';
import Chairs from './productpages/Chairs';
import Tables from './productpages/Tables';
import Beds from './productpages/Beds';
import AreaRugs from './productpages/AreaRugs';
import Decor from './productpages/Decor';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import Register from './pages/Register';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductHome />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/customerhome" element={<CustomerHome />} />
          <Route path="/addcustomer" element={<AddCustomer />} />
          <Route path="/customer/:id" element={<ViewCustomer />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/yourcart" element={<Cart />} />
          <Route path="/lighting" element={<Lighting />} />
          <Route path="/chairs" element={<Chairs />} />
          <Route path="/tables" element={<Tables />} />
          <Route path="/arearugs" element={<AreaRugs />} />
          <Route path="/beds" element={<Beds />} />
          <Route path="/decor" element={<Decor />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
