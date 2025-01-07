// import styles from './Home.module.scss';
// import classNames from 'classnames/bind';

import Slider from "~/Layout/HeaderOnly/Slider";

// const cx = classNames.bind(styles);

function Home() {
    return ( 
        <div className="Content">
            <Slider />
            <h2>Home page</h2>
        </div>
    );
}

export default Home;