import React, { useState } from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import './config/ReactotronConfig';

import Header from './components/header';
import Routes from './routes';
import { store, persistor } from './store';

import GlobalStyle from './styles/globalStyles';

function App() {
  const [visibleCart, setVisibleCart] = useState(false);
  const [visibleSearch, setVisibleSearch] = useState(false);
  const [numberScrool, setNumberScrool] = useState(0);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Header
            setVisibleCart={setVisibleCart}
            setVisibleSearch={setVisibleSearch}
            numberScrool={numberScrool}
          />
          <Routes
            setVisibleCart={setVisibleCart}
            setVisibleSearch={setVisibleSearch}
            setNumberScrool={setNumberScrool}
            visibleCart={visibleCart}
            visibleSearch={visibleSearch}
          />
          <GlobalStyle />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
