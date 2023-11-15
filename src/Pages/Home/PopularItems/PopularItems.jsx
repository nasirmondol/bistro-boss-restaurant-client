import Items from "./Items";
import SectionTitle from "../../Shared/SectionTitle";
import Button from "../../Shared/Button";
import useMenu from "../../../hooks/useMenu";


const PopularItems = () => {
    const [menu] = useMenu();
    const popularItems = menu.filter(item => item.category === 'popular')
    console.log(menu)
    return (
        <div>
            <SectionTitle subHeading={"Check i out"} heading={"Form our meny"}></SectionTitle>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-10 max-w-screen-xl py-10">
                {
                    popularItems.map(item => <Items key={item._id}
                        item={item}
                    ></Items>)
                }
            </div>
            <Button>View All Menu</Button>
            <div className="flex  justify-center items-center text-white lg:text-3xl mt-28 mb-28 bg-[#151515] h-[230px] lg:w-[1000px] mx-auto">
                <h2>Call Us: +88 0192345678910</h2>
            </div>
        </div>
    );
};

export default PopularItems;