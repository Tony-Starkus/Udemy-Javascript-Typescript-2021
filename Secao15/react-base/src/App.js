import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import history from './services/history';
import Header from './components/Header';
import store, { persistor } from './store';
import Routes from './routes';

import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
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
      </PersistGate>
    </Provider>
  );
}

export default App;