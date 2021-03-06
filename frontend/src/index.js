import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import './index.css';
import 'materialize-css/dist/css/materialize.min.css'
import configureStore from './store';
import { restoreCSRF, fetch } from './store/csrf';
import * as sessionActions from './store/session'
import { ModalProvider } from './context/Modal';
import App from './App';

const store = configureStore();

if (process.env.NODE_ENV !== "production") {
  restoreCSRF()
   
  window.csrfFetch = fetch;
  window.store = store;
  window.sessionActions = sessionActions
}

function Root() {
  return (
    <ReduxProvider store={store}>
        <BrowserRouter>
          <ModalProvider>
            <App />
          </ModalProvider>
        </BrowserRouter>
    </ReduxProvider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
