import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar, Welcome, Footer, Services, Transactions } from './components';
import Market from './pages/Market';
import Home from './Home';
import Team from './pages/Team';

const App = () => (
  <Router>
    <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/market" element={<Market />} />
          <Route path="/" element={<Home />} />
          <Route path='/team' element={<Team />} />
        </Routes>
      <Footer />
    </div>
  </Router>
);

export default App;
