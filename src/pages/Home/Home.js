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
import IntroduceTeacherContentHome from './IntroduceTeacherContentHome';
import NewsHome from './NewsHome';

function Home() {
    return (
        <div className="Content">
            <Slider />
            <Category />
            <AboutContent />
            <PopularCourse />
            <Banner />
            <Wcu />
            <BigCounter />
            <SaleContent />
            <IntroduceTeacherContentHome />
            <NewsHome />
            <Footer />
            <ScrollToTopWithProgress />
        </div>
    );
}

export default Home;
