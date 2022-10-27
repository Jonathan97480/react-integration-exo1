import React from 'react';
import { Home, About, Details } from './pages';
import { Header, Footer } from './components';
import { Routes, Route, HashRouter } from 'react-router-dom';

import './scss/style.scss';

function App() {
  return (
    <div>

      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>

          <Route path="/about" element={<About />}>
          </Route>

          <Route path="/details/:id" element={<Details />}>
          </Route>

        </Routes>
        <Footer />
      </HashRouter>

    </div>
  );
}

export default App;
