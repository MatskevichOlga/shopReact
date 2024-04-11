import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';


import styles from '../../styles/Home.module.css';
import BG from '../../images/computer.png';

const Poster = () => {
  return (
    <section className={styles.home}>
      <div className={styles.swiperContainer}>
       <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      speed={1800}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      grabCursor
      loop
      // navigation
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>       
         <div className={styles.title}>BIG SALE 20%</div>
        <div className={styles.product}>
          <div className={styles.text}>
            <div className={styles.subtitle}>the bestseller of 2024 </div>
            <h1 className={styles.head}>LENNON r2d2 with NVIDIA 5090 TI</h1>
            <button className={styles.button}>Shop Now</button>
          </div>
          <div className={styles.image}>
            <img src={BG} alt="img" />
          </div>
        </div></SwiperSlide>
      <SwiperSlide>        
        <div className={styles.title}>BIG SALE 50%</div>
        <div className={styles.product}>
          <div className={styles.text}>
            <div className={styles.subtitle}>the bestseller of 2024 </div>
            <h1 className={styles.head}>LENNON r2d2 with NVIDIA 5090 TI</h1>
            <button className={styles.button}>Shop Now</button>
          </div>
          <div className={styles.image}>
            <img src={BG} alt="img" />
          </div>
        </div></SwiperSlide>
      <SwiperSlide>       
         <div className={styles.title}>BIG SALE 10%</div>
        <div className={styles.product}>
          <div className={styles.text}>
            <div className={styles.subtitle}>the bestseller of 2024 </div>
            <h1 className={styles.head}>LENNON r2d2 with NVIDIA 5090 TI</h1>
            <button className={styles.button}>Shop Now</button>
          </div>
          <div className={styles.image}>
            <img src={BG} alt="img" />
          </div>
        </div></SwiperSlide>
      <SwiperSlide> 
        <div className={styles.title}>BIG SALE 15%</div>
        <div className={styles.product}>
          <div className={styles.text}>
            <div className={styles.subtitle}>the bestseller of 2024 </div>
            <h1 className={styles.head}>LENNON r2d2 with NVIDIA 5090 TI</h1>
            <button className={styles.button}>Shop Now</button>
          </div>
          <div className={styles.image}>
            <img src={BG} alt="img" />
          </div>
        </div></SwiperSlide>

    </Swiper>
    </div>
    </section>
  )
}

export default Poster
