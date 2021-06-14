import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import './styles.css';
import { GrudgeProvider } from "./GrudgeContext";

const rootElement = document.getElementById('root');



ReactDOM.render(
<GrudgeProvider>
    <App />
</GrudgeProvider>, 
rootElement);