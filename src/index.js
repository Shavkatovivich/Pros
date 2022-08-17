import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import i18n from "i18next";
import HttpApi from 'i18next-http-backend';
// import { FallbackLng } from 'i18next';
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector"


i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ["uz", "en", "ru"],
    // resources: {
    //   en: {
    //     translation: {
    //       "Welcome to React": "Welcome to React and react-i18next"
    //     }
    //   }
    // },
    // lng: "en", 
    fallbackLng: "en",
    detection: {
      order: [ 'htmlTag', 'cookie', 'localStorage',  'subdomain', 'path',],
      caches: ['cookie']
    }
    // interpolation: {
    //   escapeValue: false 
    // }
  });


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </React.StrictMode>
);

