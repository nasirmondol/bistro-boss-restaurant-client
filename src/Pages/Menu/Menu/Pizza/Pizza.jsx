import Items from "../../../Home/PopularItems/Items";
import Button from "../../../Shared/Button";
import Cover from "../../../Shared/Cover/Cover";
import pizzaImage from '../../../../assets/menu/pizza-bg.jpg'

const Pizza = ({ pizza }) => {
    return (
        <div>
            <Cover img={pizzaImage} title="PIZZA"></Cover>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-10 max-w-screen-xl py-10">
                {
                    pizza.map(item => <Items
                        key={item._id}
                        item={item}
                    ></Items>)
                }
            </div>
            <Button>Order Your Favorite Food</Button>
        </div>
    );
};

export default Pizza;