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
        title: 'Ngôn ngữ',
        children: {
            title: 'Languages',
            data: [
                {
                    code: 'en',
                    title: 'Tiếng Anh',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
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