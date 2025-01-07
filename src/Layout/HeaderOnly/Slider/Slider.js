import classNames from 'classnames/bind';

import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid2 } from '@mui/material';

import styles from './Slider.module.scss';
import Button from '~/components/Button';
import Image from '~/components/Image';
import imagesContent1 from '~/assets/images/Slider/hero_thumb_1_1.png';
import imagesShape1 from '~/assets/images/Slider/shape_1_1.png';

const cx = classNames.bind(styles);

function Slider() {
    return (
        <div className={cx('slider')}>
            <div className={cx('wrapper')}>
                <div className={cx('background')}>
                    {/* Container 1 */}
                    <Grid2 container spacing={2} className={cx('container')}>
                        <Grid2 item xs={12} sm={6} md={6} className={cx('content')}>
                            <div className={cx('content-heading')}>
                                <p>
                                    Học từ hôm nay <span>Giảm giá 35%</span>
                                </p>
                            </div>
    
                            <div className={cx('content-body')}>
                                <h1 className={cx('title')}>
                                    Giáo dục là tạo ra
                                    <br />
                                    <span className={cx('highlight')}>Tương lai</span>
                                    <br />
                                    <span>Tốt đẹp hơn</span>
                                </h1>
                            </div>
    
                            <div className={cx('content-description')}>
                                <p>
                                    Giáo dục có thể được coi là sự truyền tải các giá trị và kiến ​​thức tích lũy của xã
                                    hội.
                                </p>
                            </div>
    
                            <div className={cx('content-start')}>
                                <Button primary ExtraLarge rightIcon={<FontAwesomeIcon icon={faArrowRight} />} className={cx('custom-btn')}>
                                    Bắt đầu
                                </Button>
                            </div>
                        </Grid2>
    
                        <Grid2 item xs={12} sm={6} md={6} className={cx('image')}>
                            <Image src={imagesContent1} alt='content1' />
                        </Grid2>
                    </Grid2>

                    {/* hero shape */}
                    <div className={cx('hero-shape')}>
                        <div className={cx('shape-1')}>
                            <Image src={imagesShape1} alt='shape1' />
                        </div>
                        <div className={cx('shape-2')}></div>
                        <div className={cx('shape-3')}></div>
                        <div className={cx('shape-4')}></div>
                        <div className={cx('shape-5')}></div>
                    </div>

                    {/* Container 2 */}
                </div>
            </div>
        </div>
    );
}

export default Slider;
