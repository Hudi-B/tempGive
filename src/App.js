import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Lodging from './pages/Lodging';
import EditLodging from './pages/EditLodging';
import NewLodging from './pages/NewLodging';
import Login from './pages/Login';

function App() {
  return (
      <Router>
          <Navbar />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/login" element={<Login />} />
              <Route path="/lodging/:id" element={<Lodging />} />
              <Route path="/lodging/edit/:id" element={<EditLodging />} />
              <Route path="/lodging/new" element={<NewLodging />} />
          </Routes>
      </Router>
  );
}
export default App;
