import classNames from 'classnames/bind';
import { Row, Col } from 'react-bootstrap';

import styles from './Course.module.scss';
import { Card, CardItem } from '~/components/Card';
import productCourses from '~/data/productCourses';

const cx = classNames.bind(styles);

const images = {
    'course_1.png': require('~/assets/images/Home/ProductContent/course_1.png'),
    'course_2.png': require('~/assets/images/Home/ProductContent/course_2.png'),
    'course_3.png': require('~/assets/images/Home/ProductContent/course_3.png'), 
    'course_4.png': require('~/assets/images/Home/ProductContent/course_4.png'),
    'course_5.png': require('~/assets/images/Home/ProductContent/course_5.png'),
    'course_6.png': require('~/assets/images/Home/ProductContent/course_6.png'),
    'course_7.png': require('~/assets/images/Home/ProductContent/course_7.png'),
    'course_8.png': require('~/assets/images/Home/ProductContent/course_8.png'),
};

function Product() {
    return (
        <div className={cx('Product')}>
            <Row>
                {productCourses.map((productCourse, index) => (
                    <Col lg={4} md={12} xs={12} key={index}>
                        <Card>
                            <CardItem
                                courseHours={productCourse.courseHours}
                                courseMinutes={productCourse.courseMinutes}
                                classNameCard={cx('custom-card')}
                                img={images[productCourse.image]}
                                clsContent={cx('custom-cardContent')}
                                title={productCourse.title}
                                quantityUnit={productCourse.quantityUnit}
                                quantityStudent={productCourse.quantityStudent}
                                level={productCourse.level}
                                toUser={productCourse.toUser}
                                ratingNum={productCourse.ratingNum}
                                userShortNamePosted={productCourse.userShortNamePosted}
                                userNamePosted={productCourse.userNamePosted}
                                cost={productCourse.cost}
                                costSale={productCourse.costSale}
                                toCourse={productCourse.toCourse}
                            />
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default Product;
