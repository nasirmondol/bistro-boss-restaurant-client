import SectionTitle from "../../Shared/SectionTitle";
import featuredImage from '../../../assets/home/featured.jpg'
import Button from "../../Shared/Button";
import './Featured.css'
const Featured = () => {
    return (
        <div className="featured-section py-20 bg-fixed text-white">
            <div>
                <SectionTitle subHeading={"Check It Out"} heading={"Form Our Menu"}></SectionTitle>
            </div>
            <div className="flex items-center justify-center bg-opacity-60 bg-slate-400 lg:px-20 lg:py-20">
                <div>
                    <img src={featuredImage} alt="" />
                </div>
                <div className="ml-10">
                    <p>March 20, 2023</p>
                    <h4 className="lg:text-2xl">Where can get some?</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nostrum hic officia enim minus, repellendus, odit tempora numquam corporis itaque sit. Quam laboriosam nemo nobis maxime quis aperiam numquam dicta, consequatur dolore est. Dolor error perspiciatis alias cum, doloremque dignissimos vero impedit. Eos vel adipisci nostrum iusto perspiciatis dolor recusandae!</p>
                    <div className="flex justify-start">
                    <Button>Read More</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;