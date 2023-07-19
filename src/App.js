
import './App.css';
import Help from "./Help";
import Navbar from "./Navbar";
import Home from "./Home";
import Report from './Report';
import Product from './Product';

import { Container } from "react-bootstrap";
import { Route, Routes, useRoutes, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    
    <Router>
    <Navbar/>
    {/* <Sidebar/> */}
    <Routes >
            <Route path="/" element={<Home />} />
            <Route path="/Help" element={<Help />} />
            <Route path="/Report" element={<Report />} />
            <Route path="/Product" element={<Product />} />
          </Routes>
          </Router>   
  );
}

export default App;