import React from 'react';
import './App.css';

import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';

import Header from './components/header';
import Routes from './routes';

import { Provider } from 'react-redux';
import store from './store/index';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes />
        <GlobalStyle />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
