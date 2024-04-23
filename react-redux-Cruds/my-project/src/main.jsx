import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// Import Provider from react-redux
import {

  RouterProvider,
} from "react-router-dom";

import './index.css';
import store from './store'; // Import the Redux store
import router from './router/router';


ReactDOM.createRoot(document.getElementById('root')).render(
  // Wrap your App component with Provider and pass the Redux store as a prop
  <Provider store={store}>
 <RouterProvider router={router} />
  </Provider>
);
