import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import './config/ReactotronConfig';

import Header from './components/header';
import Routes from './routes';
import store from './store';

import GlobalStyle from './styles/globalStyles';

function App() {
  const [visibleCart, setVisibleCart] = useState(false);
  const [visibleSearch, setVisibleSearch] = useState(false);
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header
          setVisibleCart={setVisibleCart}
          setVisibleSearch={setVisibleSearch}
        />
        <Routes
          setVisibleCart={setVisibleCart}
          setVisibleSearch={setVisibleSearch}
          visibleCart={visibleCart}
          visibleSearch={visibleSearch}
        />
        <GlobalStyle />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
