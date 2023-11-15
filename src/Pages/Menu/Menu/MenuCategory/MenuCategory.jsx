import { Link } from "react-router-dom";
import Items from "../../../Home/PopularItems/Items";
import Button from "../../../Shared/Button";
import Cover from "../../../Shared/Cover/Cover";

const MenuCategory = ({ items, img, title }) => {
    return (
        <div>
            {title && <Cover title={title} img={img}></Cover>}
            <div className="grid md:grid-cols-2 grid-cols-1 gap-10 max-w-screen-xl py-10">
                {
                    items.map(item => <Items
                        key={item._id}
                        item={item}
                    ></Items>)
                }
            </div>
            <Link to={`/order/${title}`}>
                <Button>Order Your Favorite Food</Button>
            </Link>
        </div>
    );
};

export default MenuCategory;