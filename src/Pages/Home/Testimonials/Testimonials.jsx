import SectionTitle from "../../Shared/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { RiDoubleQuotesL } from 'react-icons/ri';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'


const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section>
            <SectionTitle heading={"testimonials"} subHeading={"What Our Client Say"}>

            </SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper lg:px-16 mx-auto">

                {
                    reviews.map(review => <SwiperSlide className="lg:my-20 lg:px-24 mx-auto" key={review._id}>
                       
                        <Rating
                            className="mx-auto my-4"
                            style={{ maxWidth: 180 }}
                            value={review.rating}
                            readOnly
                        />
                         <div className="flex justify-center my-4 lg:text-7xl">
                            <RiDoubleQuotesL ></RiDoubleQuotesL>
                        </div>
                        <p className="text-center my-4">{review.details}</p>
                        <h2 className="lg:text-2xl my-4 text-orange-500 text-center">{review.name}</h2>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;