import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div>
            <h1>{t('description')}</h1>
            <p>{t('language')}:</p>
            <button onClick={() => changeLanguage('en')}>English</button>
            <button onClick={() => changeLanguage('vi')}>Tiếng Việt</button>
        </div>
    );
};

export default LanguageSwitcher;
