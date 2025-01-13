import Slider from "~/Layout/HeaderOnly/Slider";
import Category from "./Category";
import AboutContent from "./AboutContent";
import PopularCourse from "./PopularCourse";

function Home() {
    return ( 
        <div style={{height: 10000}} className="Content">
            <Slider />
            <Category />
            <AboutContent />
            <PopularCourse />
        </div>
    );
}

export default Home;