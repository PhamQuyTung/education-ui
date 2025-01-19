import Slider from '~/Layout/HeaderOnly/Slider';
import Category from './Category';
import AboutContent from './AboutContent';
import PopularCourse from './PopularCourse';
import Banner from '~/components/Banner';
import Wcu from './Wcu';
import ScrollToTopWithProgress from '~/components/ScrollToTopWithProgress';

function Home() {
    return (
        <div style={{ height: 10000 }} className="Content">
            <Slider />
            <Category />
            <AboutContent />
            <PopularCourse />
            <Banner />
            <Wcu />
            <ScrollToTopWithProgress />
        </div>
    );
}

export default Home;
