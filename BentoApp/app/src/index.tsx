import React, { ComponentType } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import './index.scss';

// init mobx and stores
import { Provider } from 'mobx-react'
import store from './stores/BentoStore'

// wrap App inside a Provider and then render Root
const Root: ComponentType = () => {
  return (
    <Provider BentoStore={store}>
      <App />
    </Provider>)
}

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
