import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import TR_LOCALE from './locales/tr.json'
import EN_LOCALE from './locales/en.json'

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: EN_LOCALE
      },
      tr: {
        translation: TR_LOCALE
      }
    },
    lng: "en",
    fallbackLng: ["en", 'tr'],
    interpolation: {
      escapeValue: false
    }
  });

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
