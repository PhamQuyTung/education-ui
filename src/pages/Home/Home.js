// import styles from './Home.module.scss';
// import classNames from 'classnames/bind';

import Slider from "~/Layout/HeaderOnly/Slider";
import Category from "./Category";

// const cx = classNames.bind(styles);

function Home() {
    return ( 
        <div style={{height: 10000}} className="Content">
            <Slider />
            <Category/>
        </div>
    );
}

export default Home;