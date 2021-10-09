import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

function checkIsSameOrigin(url: URL) {
  if(url.hostname === window.location.hostname || url.port === window.location.port) return true;
  else return false;
}

// eslint-disable-next-line
function sendToAnalytics(metric: Object) {
  const body = JSON.stringify(metric);
  const url = 'https://jsonplaceholder.typicode.com/posts';

  // Use `navigator.sendBeacon()` if available, falling back to `fetch()`
  if (checkIsSameOrigin(new URL(url)) && navigator.sendBeacon) {
    navigator.sendBeacon(url, body);
  } else {
    fetch(url, { body, method: 'POST', keepalive: true });
  }
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
// reportWebVitals(sendToAnalytics);
