import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend'; // Sử dụng để load file JSON
import LanguageDetector from 'i18next-browser-languagedetector'; // Tự động phát hiện ngôn ngữ

i18n
    .use(Backend) // Kết nối backend để load file JSON
    .use(LanguageDetector) // Tự động phát hiện ngôn ngữ
    .use(initReactI18next) // Kết nối React
    .init({
        fallbackLng: 'en', // Ngôn ngữ mặc định
        debug: true, // Bật debug để kiểm tra lỗi
        interpolation: {
            escapeValue: false, // React đã xử lý escape
        },
        backend: {
            loadPath: '/locales/{{lng}}/translation.json', // Đường dẫn tới file dịch
        },
    });

export default i18n;
