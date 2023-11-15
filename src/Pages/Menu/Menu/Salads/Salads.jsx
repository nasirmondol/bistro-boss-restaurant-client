import Items from "../../../Home/PopularItems/Items";
import salads from '../../../../assets/menu/salad-bg.jpg'
import Button from "../../../Shared/Button";
import Cover from "../../../Shared/Cover/Cover";
const Salads = ({ salad }) => {
    return (
        <div>
            <Cover img={salads} title="Salads"></Cover>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-10 max-w-screen-xl py-10">
                {
                    salad.map(item => <Items
                        key={item._id}
                        item={item}
                    ></Items>)
                }
            </div>
            <Button>Order Your Favorite Food</Button>
        </div>
    );
};

export default Salads;