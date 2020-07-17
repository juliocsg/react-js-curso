import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

function shoot () {
  alert("Great Shot!");
}
const myelement = (
  <button onClick={shoot}>Take the shot!</button>
);

ReactDOM.render(
  myelement,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
