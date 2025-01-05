import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import các file dịch
import enTranslation from '~/locales/en/translation.json';
import viTranslation from '~/locales/vi/translation.json';

const resources = {
    en: { translation: enTranslation },
    vi: { translation: viTranslation },
};

i18n.use(LanguageDetector) // Tự động phát hiện ngôn ngữ
    .use(initReactI18next) // Kết nối với react-i18next
    .init({
        resources,
        lng: 'vi', // Ngôn ngữ mặc định
        fallbackLng: 'en', // Sử dụng ngôn ngữ này nếu ngôn ngữ hiện tại không có bản dịch
        interpolation: { escapeValue: false }, // Không escape ký tự đặc biệt
    });

export default i18n;
