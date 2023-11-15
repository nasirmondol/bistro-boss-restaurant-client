
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import img1 from '../../../assets/home/slide1.jpg'
import img2 from '../../../assets/home/slide2.jpg'
import img3 from '../../../assets/home/slide3.jpg'
import img4 from '../../../assets/home/slide4.jpg'
import img5 from '../../../assets/home/slide5.jpg'
import img6 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../Shared/SectionTitle';



const Category = () => {
    return (
        <section>
            <SectionTitle
            subHeading={"Form 11.00 AM to 10.00 PM"}
            heading={'Order Online'}
            ></SectionTitle>
            <Swiper
                slidesPerView={6}
                spaceBetween={20}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-10 max-w-screen-xl"
            >
                <SwiperSlide>
                    <img src={img1} alt="" />
                    <h2 className="text-2xl font-semibold text-center -mt-14 uppercase">Salads</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="" />
                    <h2 className="text-2xl font-semibold text-center -mt-14 uppercase">Salads</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="" />
                    <h2 className="text-2xl font-semibold text-center -mt-14 uppercase">Salads</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} alt="" />
                    <h2 className="text-2xl font-semibold text-center -mt-14 uppercase">Salads</h2>
                </SwiperSlide>
                <SwiperSlide>

                    <img src={img5} alt="" />
                    <h2 className="text-2xl font-semibold text-center -mt-14 uppercase">Salads</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img6} alt="" />
                    <h2 className="text-2xl font-semibold text-center -mt-14 uppercase">Salads</h2>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;