
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import FoodCart from "../../../../components/FoodCart/FoodCart";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";


const FoodItem = ({ item }) => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    };
    return (
        <div >
            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='grid md:grid-cols-3 gap-10'>
                        {
                            item.map(item => <FoodCart
                                key={item._id}
                                items={item}
                            ></FoodCart>)
                        }
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default FoodItem;