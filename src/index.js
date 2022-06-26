import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'jquery';
import '@popperjs/core'; 
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

ReactDOM.render(

  <App />,
  
  document.getElementById('root')
);

serviceWorker.unregister();
