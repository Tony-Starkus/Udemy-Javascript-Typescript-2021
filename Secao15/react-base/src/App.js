import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import history from './services/history';
import Header from './components/Header';

import Routes from './routes';

import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <Router history={history}>
      <Header />
      <Routes />
      <GlobalStyles />
      <ToastContainer
        autoClose={3000}
        className="toast-container"
        icon={false}
      />
    </Router>
  );
}

export default App;
