import React from 'react';
import './App.css';

import './config/ReactotronConfig';

import { history } from 'history';
import { Router } from 'react-router-dom';
import GlobalStyle from './styles/global';

import Header from './components/header';
import Routes from './routes';

import { Provider } from 'react-redux';
import store from './store/index';

import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <Routes />
        <GlobalStyle />
        <ToastContainer autoClose={3000} />
      </Router>
    </Provider>
  );
}

export default App;
