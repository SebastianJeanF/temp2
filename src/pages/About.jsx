import img1 from '../assets/house.jpg';
import img2 from '../assets/window.jpg';
import img3 from '../assets/window4.jpg';
import Masthead from '../components/NewMasthead';
import { HiOutlineReceiptTax } from 'react-icons/hi';
import { FaHandshake } from 'react-icons/fa';

export default function About() {
	return (
		//   <a href='#' class='btn btn-light mt-3'>
		//   <i class='bi bi-chevron-right pr-5'></i>Learn more
		// </a>
		<div className='App'>
			<Masthead img={img2} title={'ABOUT US'} subtitle={'INFORMATION ABOUT WINDOWS'}></Masthead>

			<section className=''>
				<div className=' mx-auto'>
					<div className=' py-12  '>
						<div className=' container  m-auto md:flex px-6 text-gray-600 md:px-12 xl:px-6'>
							<div className='space-y-6 md:space-y-0 flex flex-col xl:items-center xl:flex-row-reverse gap-6  xl:gap-12'>
								<div className='text-textPrimary'>
									<FaHandshake className='text-gray-800 h-10 w-10 mx-auto'></FaHandshake>

									<div className='text-2xl text-center text-gray-800 font-bold md:text-4xl'>
										Family Business
									</div>
									<hr className='mx-auto'></hr>
									<div
									//  style={{ fontSize: 'clamp(0.75rem, 1vw + 0.5rem, 1rem)' }}
									>
										<div class='mt-6 font-semibold'>
											We are a family-owned and operated window installation company based in
											Georgia. At Unique Windows, we are committed to providing top-quality
											installation services to our customers, and we take great pride in our
											workmanship and attention to detail.
										</div>
										<div class='mt-4'>
											Our team of skilled professionals has years of experience in the industry, and
											we have worked with some of the biggest names in the business, including Home
											Depot, Lowes, Pella, Renewal By Andersen, and Marvin. Our experience and
											expertise have allowed us to develop a deep understanding of the industry and
											a keen eye for quality workmanship.
										</div>
										<div class='mt-4'>
											As a family-owned business, we understand the importance of building strong
											relationships with our customers. That's why we strive to provide personalized
											service and attention to every customer, no matter the size or scope of the
											project. We believe that our customers are more than just clients; they are
											part of our extended family, and we treat them with the same care and respect
											that we would want for our own family members.
										</div>
										<div class='mt-4'>
											At Unique Windows, we are committed to using only the highest-quality
											materials and the latest installation techniques to ensure that your windows
											are installed correctly and efficiently. We offer a wide range of window
											styles and materials to suit your needs and preferences, and we are always
											happy to provide recommendations based on our expertise.
										</div>
										<div class='mt-4'>
											Thank you for choosing Unique Window for your window installation needs. We
											are proud to be a family-owned business and are dedicated to providing you
											with the best possible service and experience. We look forward to working with
											you and helping you achieve the look and functionality you desire for your
											home or business.
										</div>
									</div>
								</div>
								<img
									style={{ height: '50%' }}
									className='mx-auto my-auto w-3/5 fade-right'
									src={img1}
								/>
							</div>
						</div>
					</div>
					<div className='mt-4 md:m-0 py-16 rounded' style={{ backgroundColor: '#F7F7F7' }}>
						<div className='container md:flex m-auto px-6 md:px-12 xl:px-6'>
							<div className='space-y-6 md:space-y-0 flex flex-col xl:flex-row gap-6  xl:gap-12'>
								<div className='text-textPrimary'>
									<HiOutlineReceiptTax className='text-gray-800 h-10 w-10 mx-auto'></HiOutlineReceiptTax>

									<div className='text-2xl text-center font-bold md:text-4xl text-gray-800'>
										Instant Quote
									</div>
									<hr className='mx-auto'></hr>
									<div>
										<div class='mt-4 font-semibold'>
											At Unique Windows , we are committed to making the window installation process
											as simple and straightforward as possible. That's why we are proud to be the
											only window installation company to offer instant quotes.
										</div>
										<div className='mt-4'>
											With our instant quote system, you can get an accurate estimate for your
											window installation project in just a few clicks. Simply visit our website and
											provide some basic information about your project, including the type of
											windows you want, the size of the project, and any additional requirements or
											preferences. Our system will then generate an instant quote based on your
											specifications, allowing you to make an informed decision about your window
											installation project.
										</div>
										<div className='mt-4'>
											We understand that getting an accurate quote is essential to planning and
											budgeting for your project. That's why we have invested in the latest
											technology to provide instant quotes to our customers. Our system takes into
											account all the factors that can impact the cost of your project, including
											materials, labor, and any additional services you may need.
										</div>
										<div className='mt-4'>
											At Unique Windows, we believe that transparency and honesty are essential to
											building strong relationships with our customers. By offering instant quotes,
											we aim to provide our customers with the information they need to make
											informed decisions about their window installation projects. We are committed
											to providing you with the best possible service and experience, and we believe
											that{' '}
											<a href='/Window-Project/quote' className='text-blue-700 underline'>
												our instant quote system
											</a>{' '}
											is just one way we can achieve that goal.
										</div>
									</div>
								</div>
								<img className='mx-auto fade-right w-2/5' src={img3} />
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
