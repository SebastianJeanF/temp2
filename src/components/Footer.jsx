import { Link } from 'react-router-dom';

function Footer() {
	return (
		<div>
			<footer style={{ background: '#1E1E1E' }}>
				<div className='container flex flex-col-reverse  px-6 py-10 mx-auto space-y-8 md:flex-row justify-center md:space-y-0'>
					{/* <div className='flex flex-col-reverse items-center justify-between space-y-12 md:flex-row md:space-y-0 md:items-start'>
						<div className='mx-auto my-6 text-center text-white md:hidden'>
							Copyright &copy; 2022, All Rights Reserved
						</div>

						<div>
							<img src='img/logo-white.svg' className='h-8' alt='' />
						</div>

						<div className='flex justify-center space-x-4'>
							<a href='#'>
								<img src='img/icon-facebook.svg' alt='' className='h-8' />
							</a>
							<a href='#'>
								<img src='img/icon-youtube.svg' alt='' className='h-8' />
							</a>
							<a href='#'>
								<img src='img/icon-twitter.svg' alt='' className='h-8' />
							</a>
							<a href='#'>
								<img src='img/icon-pinterest.svg' alt='' className='h-8' />
							</a>
							<a href='#'>
								<img src='img/icon-instagram.svg' alt='' className='h-8' />
							</a>
						</div>
					</div> */}

					<div
						style={{ color: ' rgb(181, 181, 181)' }}
						className='flex justify-center md:justify-around underline  space-x-32 transition hover:text-white'>
						<div className='flex  flex-col space-y-3'>
							<a
								href='/Window-Project/'
								className='hover:text-white hover:decoration-white transition'>
								Home
							</a>
							<a href='/Window-Project/about' className='hover:text-white transition'>
								About Us
							</a>
							<a href='/Window-Project/products' className='hover:text-white transition'>
								Our Products
							</a>
						</div>
						<div className='flex flex-col space-y-3 '>
							<a href='/Window-Project/payment' className='hover:text-white transition'>
								Payment
							</a>
							<a href='/Window-Project/contact' className='hover:text-white transition'>
								Contact Us
							</a>
							<a href='/Window-Project/quote' className='hover:text-white transition'>
								Get Quote
							</a>
							{/* <a href='#' className='hover:text-white transition'>
								Privacy Policy
							</a> */}
						</div>
					</div>

					{/* <div className='flex flex-col justify-between'>
						<form>
							<div className='flex space-x-3'>
								<input
									type='text'
									className='flex-1 px-4 rounded-full focus:outline-none'
									placeholder='Updated in your inbox'
								/>
								<button className='px-6 py-2 text-white rounded-full bg-primary transition hover:bg-primary transitionLight focus:outline-none'>
									Go
								</button>
							</div>
						</form>
						<div className='hidden text-white md:block'>Copyright &copy; 2022, All Rights Reserved</div>
					</div> */}
				</div>
			</footer>

			<div className='w-full py-2 flex flex-col  bg-black text-center text-xsm text-gray-300'>
				<span>Copyright &copy; 2022, All Rights Reserved</span>
				<Link className='text-primary transition  hover:text-white' to='Window-Project/terms'>
					Terms and Conditions
				</Link>
			</div>
		</div>
	);
}

export default Footer;
