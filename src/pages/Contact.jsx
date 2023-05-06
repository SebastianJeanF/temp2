import FormModal from '../modals/FormModal';
// import Form from '../modals/Modal';
import openModal from '../modals/Modal';
import Masthead from '../components/NewMasthead';

import img1 from '../assets/house.jpg';
import img2 from '../assets/window.jpg';
import img3 from '../assets/bratislava.jpg';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

import React from 'react';
import { useRef, useState } from 'react';

function Form() {
	return (
		<div className=' bg-gray-100 lg:bg-inherit p-6  lg:mt-4 w-full lg:w-1/2  '>
			<div className=' container  lg:w-4/5 max-w-screen-lg '>
				<div>
					<h2 className='font-semibold text-xl text-gray-600'>Contact Form</h2>
					<p className='text-gray-500 mb-6'>
						Fill out this form if you have any questions, and we'll get back to you!
					</p>

					<div className='bg-white rounded shadow-2xl p-4 px-4 navmd:p-8 mb-6'>
						<div className=''>
							{/* <div className='text-gray-600'>
								<p className='font-medium text-lg'>Personal Details</p>
								<p>Please fill out all the fields.</p>
							</div> */}

							<div className=''>
								<form action='' className='flex flex-col gap-4 gap-y-2 text-sm'>
									<div className=''>
										<label for='first_name'>First Name</label>
										<input
											type='text'
											name='first_name'
											id='first_name'
											className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'
										/>
									</div>
									<div className=''>
										<label for='last_name'>Last Name</label>
										<input
											type='text'
											name='last_name'
											id='last_name'
											className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'
										/>
									</div>
									<div className=''>
										<label for='number'>Phone Number</label>
										<input
											type='text'
											name='number'
											id='number'
											className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'
										/>
									</div>
									<div className=''>
										<label for='email'>Email Address</label>
										<input
											type='text'
											name='email'
											id='email'
											className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'
											placeholder='email@domain.com'
										/>
									</div>

									<div className=''>
										<label for='address'>Address / Street</label>
										<input
											type='text'
											name='address'
											id='address'
											className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'
											placeholder=''
										/>
									</div>

									<div className=''>
										<label for='city'>City</label>
										<input
											type='text'
											name='city'
											id='city'
											className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'
											placeholder=''
										/>
									</div>

									<div className=''>
										<label for='zipcode'>Zip Code</label>
										<input
											type='text'
											name='zipcode'
											id='zipcode'
											className='transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50'
											placeholder=''
										/>
									</div>

									<div className='navmd:col-span-5'>
										<label for='formFile' className='form-label inline-block mb-2 text-gray-700'>
											Pictures related to Project
										</label>
										<input
											className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
											type='file'
											id='formFile'
										/>
									</div>
									<div className='navmd:col-span-5'>
										<label for='comment'>Comments</label>
										<input
											type='text'
											name='comment'
											id='comment'
											className='transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50'
											placeholder=''
										/>
									</div>

									{/* <div className='navmd:col-span-5'>
										<div className='inline-flex items-center'>
											<input
												type='checkbox'
												name='billing_same'
												id='billing_same'
												className='form-checkbox'
											/>
											<label for='billing_same' className='ml-2'>
												My billing address is different than above.
											</label>
										</div>
									</div> */}

									{/* <div className='navmd:col-span-2'>
										<label for='soda'>How many soda pops?</label>
										<div className='h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1'>
											<button
												tabindex='-1'
												for='show_more'
												className='cursor-pointer outline-none focus:outline-none border-r border-gray-200 transition-all text-gray-500 hover:text-blue-600'>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													className='h-4 w-4 mx-2'
													viewBox='0 0 20 20'
													fill='currentColor'>
													<path
														fill-rule='evenodd'
														d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
														clip-rule='evenodd'
													/>
												</svg>
											</button>
											<input
												name='soda'
												id='soda'
												placeholder='0'
												className='px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent'
												value='0'
											/>
											<button
												tabindex='-1'
												for='show_more'
												className='cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-500 hover:text-blue-600'>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													className='h-4 w-4 mx-2 fill-current'
													viewBox='0 0 20 20'
													fill='currentColor'>
													<path
														fill-rule='evenodd'
														d='M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z'
														clip-rule='evenodd'
													/>
												</svg>
											</button>
										</div>
									</div> */}

									<div className='navmd:col-span-5 mt-2 text-right'>
										<div className='inline-flex items-end'>
											<button className='bg-primary transition hover:bg-darkPrimary text-white font-bold py-2 px-4 rounded'>
												Submit
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
function Contact() {
	const [open, setOpen] = useState(false);

	//   console.log("reloading");
	function openModal() {
		console.log('happened');
	}

	// const [, updateState] = React.useState();
	//  const forceUpdate = React.useCallback(() => updateState({}), []);

	return (
		<>
			<Masthead
				img={img1}
				title={'Contact Us'}
				subtitle={"Please let us know how we can help, and we'll be in touch shortly."}></Masthead>
			<div className=' flex flex-col items-center lg:flex-row lg:items-start lg:justify-between'>
				<section className='container flex flex-col-reverse lg:flex-col p-6 mt-4  lg:w-1/2'>
					<div className=' mx-auto  text-textPrimary '>
						<div className='font-medium text-textPrimary2 leading-10 font-height text-2xl mb-5'>
							We assure your complete satisfaction throughout your window installation journey with
							us.
						</div>
						<div className='ml-4 flex flex-col gap-3'>
							<div>
								<CheckCircleIcon className='h-5 inline mr-2'></CheckCircleIcon>
								<div className='inline'>
									Our top-of-the-line Unique Windows cater to both your home and budget
									requirements, guaranteeing optimal performance and style.
								</div>
							</div>
							<div>
								<CheckCircleIcon className='h-5 inline mr-2'></CheckCircleIcon>
								<div className='inline'>
									We prioritize your preferences and prioritize understanding them. Hence, our
									attentive team takes the time to carefully listen to your specific needs before
									providing our expert advice.
								</div>
							</div>
							<div>
								<CheckCircleIcon className='h-5 inline mr-2'></CheckCircleIcon>
								<div className='inline'>
									We take precise measurements and custom-build our products to fit seamlessly into
									your home's unique design and style.
								</div>
							</div>
							<div>
								<CheckCircleIcon className='h-5 inline mr-2'></CheckCircleIcon>
								<div className='inline'>
									After thoughtful consideration, we present you with a recommendation that best
									suits your personal needs and preferences, so you can make an informed decision.
								</div>
							</div>
							<div>
								<CheckCircleIcon className='h-5 inline mr-2'></CheckCircleIcon>
								<div className='inline'>
									We offer exceptional warranty coverage for all our Unique Window products,
									ensuring your investment is well-protected and reliable.
								</div>
							</div>
						</div>
					</div>
					<div className='text-textPrimary container mt-5 pb-5 mb-5 xl:w-1/2 mx-auto flex flex-col justify-around'>
						<div>
							<h1 className='text-4xl font-medium text-center text-headerPrimary'>Contact Info</h1>
							<hr className='mx-auto'></hr>
							<ul className='list-group list-group-flush lead '>
								<li
									style={{ fontSize: 'clamp(1rem, 2vw + 0.25rem, 1.25rem);' }}
									className=' mb-2  text-center'>
									<span className='text-headerPrimary font-medium'>Email: </span>
									uniquewindowsrenovations@gmail.com
								</li>
								<div className='h-px my-4 bg-gray-200 border-0 dark:bg-gray-700'></div>
								<li
									style={{ fontSize: 'clamp(1rem, 2vw + 0.25rem, 1.25rem);' }}
									className=' mb-2 text-center '>
									<span className='text-headerPrimary font-medium'>Phone Number: </span>770-990-6603
								</li>
							</ul>
						</div>
					</div>
				</section>
				<Form></Form>
			</div>
		</>
	);
}

export default Contact;
