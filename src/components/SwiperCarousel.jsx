// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper';
import { useEffect, useRef, useState } from 'react';

import img1 from '../assets/HomeSlider1.jpg';
import img2 from '../assets/HomeSlider2.jpg';
import img3 from '../assets/HomeSlider3.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

function rand(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function imgUrl() {
	const id = rand(1, 200);
	return `https://picsum.photos/id/${id}/1600/400`;
}

function createSlide() {
	return (
		<SwiperSlide className='homeSwiper'>
			<div
				className='w-full relative  bg-cover bg-center'
				style={{ backgroundImage: `url(${img1})`, height: '40vh' }}>
				<div
					style={{ position: 'absolute', top: '40%', left: '60px' }}
					className='flex flex-col justify-between items-start'>
					<div className=' home block '>HIGH-QUALITY WINDOWS</div>
					<a
						href='/Window-Project/products'
						className='home-carousel-button mt-5 transition hover:bg-orange-900'>
						VIEW OUR PRODUCTS
					</a>
				</div>
			</div>
		</SwiperSlide>
	);
}
// function createSlide() {
// 	const name = imgUrl();
// 	return (
// 		<SwiperSlide className='homeSwiper'>
// 			<div
// 				className='w-full relative flex justify-center items-center  bg-cover bg-center  '
// 				style={{ backgroundImage: `url(${name})`, height: '60vh' }}>
// 				<div className=' w-1/2 bg-red-500'>
// 					<div className=' home block '>HIGH-QUALITY WINDOWS INSTALLATION </div>
// 					<div className='home-carousel-button mt-5 transition hover:bg-orange-900'>
// 						VIEW OUR PRODUCTS
// 					</div>
// 				</div>
// 			</div>
// 		</SwiperSlide>
// 	);
// }

function createSlide1() {
	return (
		<SwiperSlide>
			<div
				className='w-full relative bg-cover bg-center'
				style={{ backgroundImage: `url(${img2})`, height: '40vh' }}>
				<div
					className='flex flex-col justify-between items-end '
					style={{ position: 'absolute', top: '40%', right: '15%' }}>
					<div className=' home block'>FAMILY-OWNED BUSINESS</div>
					<a
						href='/Window-Project/contact'
						className='home-carousel-button mt-5 transition hover:bg-orange-900'>
						CHECK ABOUT US
					</a>
				</div>
			</div>
		</SwiperSlide>
	);
}
function createSlide2() {
	return (
		<SwiperSlide>
			<div
				className='w-full relative bg-cover bg-center'
				style={{ backgroundImage: `url(${img3})`, height: '40vh' }}>
				<div
					className='flex flex-col justify-between items-end '
					style={{ position: 'absolute', top: '40%', left: '15%' }}>
					<div className=' home block'>TRANSPARENT COSTS</div>
					<a
						href='/Window-Project/quote'
						className='home-carousel-button mt-5 transition hover:bg-orange-900'>
						USE INSTANT QUOTE
					</a>
				</div>
			</div>
		</SwiperSlide>
	);
}
export default () => {
	return (
		<Swiper
			modules={[Autoplay, Navigation, EffectFade, Pagination]}
			autoplay={true}
			navigation
			pagination={{ clickable: true }}
			effect={'fade'}
			spaceBetween={50}
			slidesPerView={1}
			onSlideChange={() => console.log('slide change')}
			onSwiper={(swiper) => console.log(swiper)}>
			{createSlide()}
			{createSlide1()}
			{createSlide2()}
			{/* <SwiperSlide>
        <img src={img1}/>
        Slide 1
      </SwiperSlide>
      <SwiperSlide>
        <img src={img2}/>
        Slide 1
      </SwiperSlide>      <SwiperSlide>
        <img src={img3}/>
        Slide 1
      </SwiperSlide> */}
		</Swiper>
	);
};
