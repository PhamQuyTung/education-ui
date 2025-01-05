import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faLanguage,
    faMoon,

} from '@fortawesome/free-solid-svg-icons';

import DarkModeToggle from '~/components/DarkMode';

const MENUITEMS__OPTION = [
    {
        icon: <FontAwesomeIcon icon={faLanguage} />,
        title: 'Việt Nam',
        children: {
            title: 'Languages',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    code: 'zh-cn',
                    title: 'Chinese',
                },
                {
                    code: 'ja',
                    title: 'Japanese',
                },
                {
                    code: 'ko',
                    title: 'Korean',
                },
                {
                    code: 'fr',
                    title: 'French',
                },
                {
                    code: 'fi',
                    title: 'Suomi', // Finland
                },
                {
                    code: 'no',
                    title: 'Norsk', // Norway
                },
                {
                    code: 'se',
                    title: 'Svenska', // Sweden
                },
                {
                    code: 'dk',
                    title: 'Dansk', // Denmark
                },
                {
                    code: 'ch',
                    title: 'Schweizerdeutsch', // Switzerland (Swiss German)
                },
                {
                    code: 'nl',
                    title: 'Nederlands', // Netherlands
                },
                {
                    code: 'de',
                    title: 'Deutsch', // Germany
                },
                {
                    code: 'es',
                    title: 'Español', // Spain
                },
                {
                    code: 'pt',
                    title: 'Português', // Portugal
                },
                {
                    code: 'it',
                    title: 'Italiano', // Italy
                },
                {
                    code: 'ru',
                    title: 'Русский', // Russia
                },
                {
                    code: 'tr',
                    title: 'Türkçe', // Turkey
                },
                {
                    code: 'ar',
                    title: 'العربية', // Arabic
                },
                {
                    code: 'hi',
                    title: 'हिन्दी', // Hindi (India)
                },
                {
                    code: 'th',
                    title: 'ไทย', // Thai (Thailand)
                },
                {
                    code: 'id',
                    title: 'Bahasa Indonesia', // Indonesian (Indonesia)
                },
                {
                    code: 'ms',
                    title: 'Bahasa Melayu', // Malay (Malaysia)
                },
                {
                    code: 'bn',
                    title: 'বাংলা', // Bengali (Bangladesh/India)
                },
                {
                    code: 'ur',
                    title: 'اردو', // Urdu (Pakistan/India)
                },
                {
                    code: 'pl',
                    title: 'Polski', // Polish (Poland)
                },
                {
                    code: 'uk',
                    title: 'Українська', // Ukrainian (Ukraine)
                },
                {
                    code: 'he',
                    title: 'עברית', // Hebrew (Israel)
                },
                {
                    code: 'el',
                    title: 'Ελληνικά', // Greek (Greece)
                },
                {
                    code: 'hu',
                    title: 'Magyar', // Hungarian (Hungary)
                },
                {
                    code: 'cs',
                    title: 'Čeština', // Czech (Czech Republic)
                },
                {
                    code: 'ro',
                    title: 'Română', // Romanian (Romania)
                },
                {
                    code: 'sk',
                    title: 'Slovenčina', // Slovak (Slovakia)
                },
                {
                    code: 'bg',
                    title: 'Български', // Bulgarian (Bulgaria)
                },
                {
                    code: 'sr',
                    title: 'Српски', // Serbian (Serbia)
                },
                {
                    code: 'hr',
                    title: 'Hrvatski', // Croatian (Croatia)
                },
                {
                    code: 'sw',
                    title: 'Kiswahili', // Swahili (East Africa)
                },
                {
                    code: 'ta',
                    title: 'தமிழ்', // Tamil (India/Sri Lanka)
                },
                {
                    code: 'te',
                    title: 'తెలుగు', // Telugu (India)
                },
                {
                    code: 'fa',
                    title: 'فارسی', // Persian (Iran)
                },
                {
                    code: 'am',
                    title: 'አማርኛ', // Amharic (Ethiopia)
                },
                {
                    code: 'my',
                    title: 'မြန်မာစာ', // Burmese (Myanmar)
                },
                {
                    code: 'km',
                    title: 'ភាសាខ្មែរ', // Khmer (Cambodia)
                },
                {
                    code: 'tl',
                    title: 'Filipino', // Tagalog/Filipino (Philippines)
                },
            ],
        },
    },

    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Câu hỏi thường gặp',
        to: '/question',
    },

    {
        icon: <FontAwesomeIcon icon={faMoon} />,
        title: 'Chế độ sáng/tối',
        children: {
            title: 'Chế độ sáng/tối',
            data: [
                {
                    title: <DarkModeToggle />,
                },
            ],
        },
    },
];

export default MENUITEMS__OPTION;