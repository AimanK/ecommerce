import './App.css';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


import Navbar from "./layout/Navbar.jsx"
import CustomerHome from "./pages/CustomerHome";
import ProductHome from "./pages/ProductHome";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddCustomer from "./customers/AddCustomer";
import ViewCustomer from './customers/ViewCustomer';
import Shop from './pages/Shop.jsx';
import AboutUs from './pages/AboutUs.jsx';
import Cart from './pages/Cart.js';
import Lighting from './productpages/Lighting.jsx';
import Chairs from './productpages/Chairs.jsx';
import Tables from './productpages/Tables.jsx';
import Beds from './productpages/Beds.jsx';
import AreaRugs from './productpages/AreaRugs.jsx';
import Decor from './productpages/Decor.jsx';
import Profile from './pages/Profile.jsx';
import SignIn from './pages/SignIn.jsx';
import Register from './pages/Register';
import Auth0ProviderWithNavigate from './auth/auth0-provider-with-navigate'; 

function App() {
  return (
    <div className="App">
      <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<ProductHome />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/newcustomer" element={<Register />} />
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
    </div>
  );
}

export default App;