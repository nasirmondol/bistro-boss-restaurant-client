import { Helmet } from "react-helmet";
import BristoBoss from "../../BristoBoss/BristoBoss";
import Banner from "../Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularItems from "../PopularItems/PopularItems";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <BristoBoss></BristoBoss>
            <PopularItems></PopularItems>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;