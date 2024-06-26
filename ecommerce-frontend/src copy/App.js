import './App.css';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


import Navbar from "./layout/Navbar.js"
import Sidebar from "./layout/Sidebar.js"
import CustomerHome from "./pages/CustomerHome";
import ProductHome from "./pages/ProductHome";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddCustomer from "./customers/AddCustomer";
import ViewCustomer from './customers/ViewCustomer';
import Shop from './pages/Shop.js';
import AboutUs from './pages/AboutUs.js';
import Cart from './pages/Cart.js';
import Lighting from './productpages/Lighting.js';
import Chairs from './productpages/Chairs.js';
import Tables from './productpages/Tables.js';
import Beds from './productpages/Beds.js';
import AreaRugs from './productpages/AreaRugs.js';
import Decor from './productpages/Decor.js';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
  

      <Routes>
          <Route exact path="/" element={< ProductHome />} />
          <Route exact path="/customerhome" element={<CustomerHome />} />
          <Route exact path="/addcustomer" element={<AddCustomer />} />
          <Route exact path="/customer/:id" element={<ViewCustomer />} />
          <Route exact path="/shop" element={<Shop />} />
          <Route exact path="/aboutus" element={<AboutUs />} />
          <Route exact path="/yourcart" element={<Cart />} />
          <Route exact path="/lighting" element={<Lighting />} />
          <Route exact path="/chairs" element={<Chairs />} />
          <Route exact path="/tables" element={<Tables />} />
          <Route exact path="/arearugs" element={<AreaRugs />} />
          <Route exact path="/beds" element={<Beds/>} />
          <Route exact path="/decor" element={<Decor />} />
      </Routes>

      </Router>
    </div>
  );
}

export default App;
