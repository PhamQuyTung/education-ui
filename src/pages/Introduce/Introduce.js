import React from 'react';
import classNames from 'classnames/bind';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styles from './Introduce.module.scss';
import AboutIntroduce from '~/pages/Introduce/AboutIntroduce';
import AboutContent from '~/pages/Home/AboutContent';
import BigCounter from '~/pages/Home/BigCounter';
import IntroduceTeacherContent from '~/pages/Home/IntroduceTeacherContentHome';
import Banner2 from '~/components/Banner2';
import NewsHome from '../Home/NewsHome';
import Banner from '~/components/Banner';
import ScrollToTopWithProgress from '~/components/ScrollToTopWithProgress';

const cx = classNames.bind(styles);

function Introduce() {
    return (
        <div className="introduce">
            <AboutIntroduce />
            <AboutContent />
            <BigCounter />
            <IntroduceTeacherContent />
            <Banner2 />
            <NewsHome />
            <ScrollToTopWithProgress />
            <Banner />
        </div>
    );
}

export default Introduce;
