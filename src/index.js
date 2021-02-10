import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import './i18n'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback="Loading...">
      <App />
      </Suspense>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
