import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from '../../assets/1.jpg';
import img2 from "../../assets/2.jpg";
import img3 from '../../assets/3.jpg';
import img4 from '../../assets/4.jpg';
import img5 from '../../assets/5.jpg';
import img6 from '../../assets/6.jpg';
import img7 from '../../assets/7.jpg';
import img8 from '../../assets/8.jpg';
import img9 from '../../assets/9.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
// import { EffectFade, Navigation, Pagination } from 'swiper/modules';

import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
const Slider = () => {
    return (
        <div>

            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                speed={800}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,

                }}
                effect={'fade'}
                // pagination={{
                //     clickable: true,
                // }}
                // navigation={true}
                modules={[Autoplay, Pagination, Navigation, EffectFade]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='relative h-full object-contain w-full flex items-center justify-center'>
                        <img src={img1} />
                        <img src={img2} />
                        <img src={img3} />
                        <div className="absolute overflow-hidden top-0  h-full w-full inset-0 bg-gradient-to-r  from-[#151515] to-[rgba(21, 21, 21, 0.9)] z-10">
                           
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative h-full w-full object-contain flex items-center justify-center'>
                        <img src={img4} />
                        <img src={img5} />
                        <img src={img6} />
                        <div className="absolute overflow-hidden top-0  h-full w-full inset-0 bg-gradient-to-r  from-[#151515] to-[rgba(21, 21, 21, 0.9)] z-10">

                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative h-full w-full object-contain flex items-center justify-center'>
                        <img src={img7} />
                        <img src={img8} />
                        <img src={img9} />
                        <div className="absolute overflow-hidden top-0  h-full w-full inset-0 bg-gradient-to-r  from-[#151515] to-[rgba(21, 21, 21, 0.9)] z-10">

                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative h-full w-full object-contain flex items-center justify-center'>
                        <img src={img3} />
                        <img src={img2} />
                        <img src={img1} />
                        <div className="absolute overflow-hidden top-0  h-full w-full inset-0 bg-gradient-to-r  from-[#151515] to-[rgba(21, 21, 21, 0.9)] z-10">

                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative h-full w-full object-contain flex items-center justify-center'>
                        <img src={img5} />
                        <img src={img6} />
                        <img src={img4} />
                        <div className="absolute overflow-hidden top-0  h-full w-full inset-0 bg-gradient-to-r  from-[#151515] to-[rgba(21, 21, 21, 0.9)] z-10">

                        </div>
                    </div>


                </SwiperSlide>

                <SwiperSlide>
                    <div className='relative h-full w-full object-contain flex items-center justify-center '>
                        <img src={img8} />
                        <img src={img9} />
                        <img src={img7} />
                        <div className="absolute overflow-hidden top-0  h-full w-full inset-0 bg-gradient-to-r  from-[#151515] to-[rgba(21, 21, 21, 0.9)] z-10">

                        </div>
                    </div>
                </SwiperSlide>




            </Swiper>


        </div>
    );
};

export default Slider;