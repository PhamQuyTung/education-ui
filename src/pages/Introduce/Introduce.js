import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styles from './Introduce.module.scss';
import Title from '~/components/Title';
import { Card, CardItem } from '~/components/Card';
import Image from '~/components/Image';
import AboutIntroduce from '~/pages/Introduce/AboutIntroduce'

const cx = classNames.bind(styles);

function Introduce() {
    return (
        <div className='introduce'>
            <AboutIntroduce />
        </div>
    );
}

export default Introduce;
