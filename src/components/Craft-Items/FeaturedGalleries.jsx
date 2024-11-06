// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
const FeaturedGalleries = () => {
    return (
     
 <div className='container mx-auto'>
  <h1 className='text-3xl py-6'>Featured Galleries</h1>
   <Swiper
  
  spaceBetween={50}
  slidesPerView={3}
  onSlideChange={() => console.log('slide change')}
  onSwiper={(swiper) => console.log(swiper)}
>
 
  <SwiperSlide><a href="#"><img src="https://i.ibb.co.com/4WN3sKK/art11.webp" alt="" /></a></SwiperSlide>
  <SwiperSlide><a href="#"><img src="https://i.ibb.co.com/42nzBB2/art14.webp" alt="" /></a></SwiperSlide>
  <SwiperSlide><a href="#"><img src="https://i.ibb.co.com/br5K9SN/art12.webp" alt="" /></a></SwiperSlide>
  <SwiperSlide><a href="#"><img src="https://i.ibb.co.com/4WN3sKK/art11.webp" alt="" /></a></SwiperSlide>
  ...
</Swiper>
 </div>
    );
};

export default FeaturedGalleries;