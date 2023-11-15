import Cover from "../../Shared/Cover/Cover";
import orderImage from '../../../../src/assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";
import FoodItem from "./FoodItem/FoodItem";
import { useParams } from "react-router-dom";

const Order = () => {
    const categories = ['salad', 'pizza', 'dessert', 'soup', 'drinks'];

    const {category} = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
    console.log(category);
    const drinks = menu.filter(item => item.category === 'drinks')
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    return (
        <div>
            <Cover title="Order Food" img={orderImage}></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <FoodItem item={salad}></FoodItem>
                </TabPanel>
                <TabPanel>
                    <FoodItem item={pizza}></FoodItem>
                </TabPanel>
                <TabPanel>
                    <FoodItem item={dessert}></FoodItem>
                </TabPanel>
                <TabPanel>
                    <FoodItem item={soup}></FoodItem>
                </TabPanel>
                <TabPanel>
                    <FoodItem item={drinks}></FoodItem>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;