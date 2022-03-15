import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux'
import { store } from './store'
import reportWebVitals from './reportWebVitals';
import { RecoilRoot } from 'recoil'

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
        <RecoilRoot>
         <App />
        </RecoilRoot>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
