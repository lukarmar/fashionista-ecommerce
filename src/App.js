import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Header from './components/header';
import Routes from './routes';
import store from './store';

import GlobalStyle from './styles/globalStyles';

function App() {
  const [visibleCart, setVisibleCart] = useState(false);
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header setVisibleCart={setVisibleCart} />
        <Routes setVisibleCart={setVisibleCart} visibleCart={visibleCart} />
        <GlobalStyle />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
