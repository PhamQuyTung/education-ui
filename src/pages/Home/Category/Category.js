// import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames/bind';
import { Container, Row, Col } from 'react-bootstrap';

import styles from './Category.module.scss';
import Title from '~/components/Title';
import CategoryList from '~/components/Card/CategoryList';

const cx = classNames.bind(styles);

function Category() {
    return (
        <div className={cx('category')}>
            <Container className={cx('wrapper')}>
                <Row>
                    <Col lg={4} md={0} xs={0}>
                        <Title
                            title="Danh mục khóa học"
                            sub="Khám phá các danh mục hàng đầu"
                            buttonDescription="Xem tất cả danh mục"
                            to='/course'
                            clsButton={cx('custom-btn')}
                        ></Title>
                    </Col>

                    <Col lg={8} md={12} xs={12}>
                        <CategoryList/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Category;
