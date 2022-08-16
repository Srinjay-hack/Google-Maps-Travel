import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Map from './components/Map/Map';
import Header from './components/Header/Header';
import PlaceDetails from './components/PlaceDetails/PlaceDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);