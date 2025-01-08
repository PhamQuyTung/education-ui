import classNames from 'classnames/bind';

import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, Col } from 'react-bootstrap';

import styles from './Container.module.scss';
import Button from '~/components/Button';
import Image from '~/components/Image';
import AnimationContent from '~/components/Animation';

const cx = classNames.bind(styles);

function Container1({ sale = 35, contentTitle1, contentTitle2, contentTitle3, subTitle, imgFooter }) {
    return (
        <div >
            <Container className={cx('container')}>
                <Row>
                    <Col lg={6} md={12} xs={12} className={cx('content')}>
                        <AnimationContent>
                            <div className={cx('content-heading')}>
                                <p>
                                    Học từ hôm nay <span>Giảm giá {sale}%</span>
                                </p>
                            </div>
        
                            <div className={cx('content-body')}>
                                <h1 className={cx('title')}>
                                    {contentTitle1}
                                    <br />
                                    <span className={cx('highlight')}>{contentTitle2}</span>
                                    <br />
                                    <span>{contentTitle3}</span>
                                </h1>
                            </div>
        
                            <div className={cx('content-description')}>
                                <p>{subTitle}</p>
                            </div>
        
                            <div className={cx('content-start')}>
                                <Button
                                    primary
                                    ExtraLarge
                                    rightIcon={<FontAwesomeIcon icon={faArrowRight} />}
                                    className={cx('custom-btn')}
                                >
                                    Bắt đầu
                                </Button>
                            </div>
                        </AnimationContent>
                    </Col>
    
                    <Col lg={6} md={12} xs={12} className={cx('image')}>
                        <Image src={imgFooter} alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Container1;
