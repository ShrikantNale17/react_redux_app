// import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './containers/Header';
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path='/' exact element={<ProductListing />}></Route>
          <Route path='/product/:productId' exact element={<ProductDetail />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
