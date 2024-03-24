import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './common/helper.css';

import Navbar from './common/Navbar';
import Home from './app/Home';
import Split from './app/Split';
// import Home from './app/Final';

const App = () => {
  return (
    <div class="container">
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/split" element={<Split />} />
          {/* <Route path="/final" element={<Final />}  /> */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
