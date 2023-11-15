import Items from "../../../Home/PopularItems/Items";
import Cover from "../../../Shared/Cover/Cover";
import coverImage from '../../../../assets/menu/dessert-bg.jpeg'
import Button from "../../../Shared/Button";

const Dessert = ({ dessert }) => {
    return (
        <div>
            <Cover img={coverImage} title="DESSERTS"></Cover>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-10 max-w-screen-xl py-10">
                {
                    dessert.map(item => <Items
                        key={item._id}
                        item={item}
                    ></Items>)
                }
            </div>
            <Button>ORDER YOUR FAVOURITE FOOD</Button>
        </div>
    );
};

export default Dessert;