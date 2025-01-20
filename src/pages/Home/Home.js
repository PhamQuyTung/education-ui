import Slider from '~/Layout/HeaderOnly/Slider';
import Category from './Category';
import AboutContent from './AboutContent';
import PopularCourse from './PopularCourse';
import Banner from '~/components/Banner';
import Wcu from './Wcu';
import BigCounter from './BigCounter';
import SaleContent from './SaleContent';
import ScrollToTopWithProgress from '~/components/ScrollToTopWithProgress';
import Footer from '~/Layout/DefaultLayout/Footer';

function Home() {
    return (
        <div style={{ height: 10000 }} className="Content">
            <Slider />
            <Category />
            <AboutContent />
            <PopularCourse />
            <Banner />
            <Wcu />
            <BigCounter />
            <SaleContent />
            <Footer />
            <ScrollToTopWithProgress />
        </div>
    );
}

export default Home;
