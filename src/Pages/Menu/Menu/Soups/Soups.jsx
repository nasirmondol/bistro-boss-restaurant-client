import Items from "../../../Home/PopularItems/Items";
import Button from "../../../Shared/Button";
import Cover from "../../../Shared/Cover/Cover";
import soupsImage from '../../../../assets/menu/soup-bg.jpg'

const Soups = ({ soups }) => {
    return (
        <div>
            <Cover img={soupsImage} title="Soups"></Cover>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-10 max-w-screen-xl py-10">
                {
                    soups.map(item => <Items
                        key={item._id}
                        item={item}
                    ></Items>)
                }
            </div>
            <Button>Order Your Favorite Food</Button>
        </div>
    );
};

export default Soups;