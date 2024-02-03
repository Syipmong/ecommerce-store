// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Landing from './Landing';
import StorePage from '../src/components/StorePage';

export default function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Landing />} />
        <Route path="/store" element={<StorePage />} />
      </Routes>
    </Router>
  );
}
