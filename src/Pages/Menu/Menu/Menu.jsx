import { Helmet } from "react-helmet";
import Cover from "../../Shared/Cover/Cover";
import menuImg from '../../../assets/menu/banner3.jpg'
import desertImg from '../../../assets/menu/dessert-bg.jpeg'
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../Shared/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";
import offerImage from '../../../assets/menu/banner3.jpg'
import pizzaImage from '../../../assets/menu/pizza-bg.jpg'
import saladsImage from '../../../assets/menu/salad-bg.jpg'
import soupImage from '../../../assets/menu/soup-bg.jpg'

const Menu = () => {
    const [menu] = useMenu();
    const offer = menu.filter(item => item.category === 'offered')
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')

    return (
        <div>
            <Helmet>
                <title>
                    Bistro Boss | Menu
                </title>
            </Helmet>
            <Cover img={menuImg} title="Our Menu"></Cover>
            <SectionTitle heading="Today's offer" subHeading="Don't miss"></SectionTitle>
            <MenuCategory
                items={offer}
                img={offerImage}
                title="today's offer"
            ></MenuCategory>
            <MenuCategory
                items={soup}
                img={soupImage}
                title="soup"
            ></MenuCategory>
            <MenuCategory
                items={pizza}
                img={pizzaImage}
                title="pizza"
            ></MenuCategory>
            <MenuCategory
                items={salad}
                img={saladsImage}
                title="salad"
            ></MenuCategory>
            <MenuCategory
                items={dessert}
                img={desertImg}
                title="dessert"
            ></MenuCategory>
        </div>
    );
};

export default Menu;