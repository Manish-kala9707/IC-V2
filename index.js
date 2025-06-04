
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { StrictMode } from 'react';
import './i18n';
import i18n from './i18n';
import { I18nextProvider } from 'react-i18next';

import FetchApiData from './pages/Store/FetchApiData';
const app = document.getElementById('root');

// create a root
const root = createRoot(app);

// render app to root
root.render(
  <StrictMode>
     
    <I18nextProvider i18n={i18n}>
          <App />
    </I18nextProvider>
    
  </StrictMode>
);
