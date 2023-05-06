//import './App.css'
import img1 from '../assets/house.jpg';
import img2 from '../assets/installation.jpg';
import img3 from '../assets/contactUs.jpg';

import Carousel from '../components/SwiperCarousel';
import { GrContactInfo } from 'react-icons/gr';
import { TbWindow } from 'react-icons/tb';

function Home() {
	return (
		<div>
			{/* <section className="bg-dark text-light div-5 div-lg-0 pt-lg-5 text-center">
      <Container>
        <div className="d-sm-flex text-center text-sm-start justify-content-between">
      <div className="m-2">
          <h1>My house <span className="text-warning">website</span>!</h1>
          <div className="lead my-4">Sebastian!</div>
          <button className="btn btn-primary btn-lg">Click to begin</button>
          </div>
        <Image className="img-fluid w-50" src={img2}  height={50} width={50} alt="image" /> 
        </div>
      </Container>
     </section> */}

			<Carousel></Carousel>

			<section id='cta' className='bg-red-500'>
				<div className='container flex flex-col items-center justify-between px-6 py-10 mx-auto space-y-12 md:py-8 md:flex-row md:space-y-0'>
					<div className='text-2xl font-bold text-center text-white md:text-2xl md:max-w-xl md:text-left'>
						Need pricing? Get an <b>instant</b> quote on the exact window you want!
					</div>
					<div>
						<div className=' px-6 py-2 text-headerPrimary border-black bg-white rounded-full transition shadow-2xl align-middle font-semibold hover:bg-gray-200'>
							<a href='/Window-Project/quote' className='align-middle '>
								Get Quote!
							</a>
						</div>
					</div>
				</div>
			</section>

			<section className=' '>
				<div className=' mx-auto'>
					<div className='  py-16 rounded'>
						<div className='container md:flex m-auto px-6 md:px-12 xl:px-6'>
							<div className='space-y-6 md:space-y-0 flex flex-col lg:flex-row gap-6  lg:gap-12'>
								<div className='text-textPrimary'>
									<TbWindow className='text-gray-800 h-10 w-10 mx-auto'></TbWindow>
									<div className='text-2xl text-center font-bold md:text-4xl text-gray-800'>
										Our Products
									</div>
									<hr className='mx-auto'></hr>
									<div className='mt-6 text-gray-600'>
										With unique windows we offer high-quality window installation services for both
										residential and commercial properties. We specialize in providing custom-fit
										windows that perfectly suit your building's design and architecture, while also
										meeting your energy-efficiency needs.
									</div>
									<div className='mt-4 text-gray-600'>
										Our team of experienced professionals is dedicated to providing excellent
										customer service, ensuring that every project is completed on time and within
										budget. Whether you're building div new home or upgrading your existing windows,{' '}
										<a
											href='/Window-Project/products'
											className='text-blue-700 transition  underline'>
											we have the expertise to help you achieve your goals.
										</a>
									</div>
								</div>
								<img className='contactUs fade-right' src={img2} />
							</div>
						</div>
					</div>
					<div style={{ backgroundColor: '#F7F7F7' }} className='md:m-0 mt-4 py-16 '>
						<div className=' container  m-auto md:flex px-6 text-gray-600 md:px-12 xl:px-6'>
							<div className='space-y-6 md:space-y-0 flex flex-col lg:flex-row-reverse gap-6  lg:gap-12'>
								<div className='text-textPrimary'>
									<GrContactInfo
										style={{ color: '#007575' }}
										className='text-gray-900 h-10 w-10 mx-auto'></GrContactInfo>

									<div className='text-2xl text-center text-gray-800 font-bold md:text-4xl'>
										Contact Us
									</div>
									<hr className='mx-auto'></hr>
									<div className='mt-6 '>
										If you have any questions or would like to learn more about our window
										installation services, we are always happy to hear from you. You can easily
										contact us by visiting the{' '}
										<a href='/Window-Project/contact' className='text-blue-700 underline'>
											"Contact Us"
										</a>{' '}
										section of our website. Here, you'll find our phone number, and email address.
										so you can choose the method of communication that works best for you.
									</div>
									<div className='mt-4 '>
										Our team is always available to answer your questions and provide you with any
										information you need about our products and services. We're committed to
										providing exceptional customer service and look forward to hearing from you
										soon.
									</div>
								</div>
								<img className='contactUs fade-right' src={img3} />
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Home;
