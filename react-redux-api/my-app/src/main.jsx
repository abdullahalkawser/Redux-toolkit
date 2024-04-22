import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; 
import { createRoot } from 'react-dom/client';
import './index.css';
import store from './app/store.js';
// import Counterssss from './features/counter.jsx';
import Counterb from './features/counter/counters.jsx';


// Use ReactDOM.render instead of ReactDOM.createRoot().render()
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
{/* <Counterssss></Counterssss> */}
<Counterb></Counterb>
</Provider>,
 
);
