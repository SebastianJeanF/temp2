//import './App.css'
import img1 from '../assets/house.jpg';
import img2 from '../assets/window.jpg';
import img3 from '../assets/bratislava.jpg';
import img from '../assets/OIP.jpg';
import wimg1 from '../assets/quote/windows/Single-Hung.png';
import wimg2 from '../assets/quote/windows/Double-Hung.png';
import wimg3 from '../assets/quote/windows/Angle-Top.png';

import Radio from '../components/Radio';
import Masthead from '../components/NewMasthead';
import Image from '../components/SVGPicker';
import Three from './3D';

import { Disclosure, Transition } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import { PlusIcon } from '@heroicons/react/20/solid';
import { MinusIcon } from '@heroicons/react/20/solid';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { PlusCircleIcon } from '@heroicons/react/24/outline';
import { MinusCircleIcon } from '@heroicons/react/24/outline';

import { MutableRefObject, useEffect, useContext, useRef, useState } from 'react';
import { PriceContext } from '../context/Context';
import Colors from '../assets/quote/color/index.js';
import Windows from '../assets/quote/windows/index.js';
// import { CSSTransitionGroup } from 'react-transition-group';

const transitionAttributes = {
	enter: 'transition duration-100 ease-out',
	enterFrom: 'transform scale-95 opacity-0',
	enterTo: 'transform scale-100 opacity-100',
	leave: 'transition duration-75 ease-out',
	leaveFrom: 'transform scale-100 opacity-100',
	leaveTo: 'transform scale-95 opacity-0',
};

const plans = [
	{
		name: 'Brown',
		type: 'color',
		cpus: '',
		disk: '',
		price: 50,
	},
	{
		name: 'White',
		type: 'color',
		cpus: '',
		disk: '',
		price: 100,
	},
	{
		name: 'Black',
		type: 'color',
		cpus: '',
		disk: '',
		price: 150,
	},
];

const sizes = [
	{
		name: 'Large',
		type: 'size',
		cpus: '',
		disk: '',
		price: 2550,
	},
	{
		name: 'Medium',
		type: 'size',
		cpus: '',
		disk: '',
		price: 2100,
	},
	{
		name: 'Small',
		type: 'size',
		cpus: '',
		disk: '',
		price: 1000,
	},
];
const types = [
	{
		name: 'Square',
		type: 'frame',
		cpus: '',
		disk: '',
		price: 10,
	},
	{
		name: 'Rectangular',
		type: 'frame',
		cpus: '',
		disk: '',
		price: 20,
	},
	{
		name: 'Arch',
		type: 'frame',
		cpus: '',
		disk: '',
		price: 30,
	},
];
function Form() {
	return (
		<div className='mt-5 p-6 bg-white flex items-center justify-center'>
			<div className='container max-w-screen-lg mx-auto'>
				<div>
					<h2 className='font-semibold text-xl text-gray-600'>Quote Form</h2>
					<p className='text-gray-500 mb-6'>
						After finding the right window for you, fill out this form to be contacted
					</p>

					<div className='bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6'>
						<div className='grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3'>
							<div className='text-gray-600'>
								<p className='font-medium text-lg'>Please fill out all the fields</p>
								{/* <div className='text-red-500'>* Required</div> */}
							</div>

							<div className='lg:col-span-2'>
								<form
									action='
        '
									className='grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5'>
									<div className='md:col-span-5'>
										<label for='full_name'>
											<span className='text-red-500'>* </span>Full Name
										</label>
										<input
											type='text'
											name='full_name'
											id='full_name'
											className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'
										/>
									</div>

									<div className='md:col-span-5'>
										<label for='email'>
											<span className='text-red-500'>* </span>Email Address
										</label>
										<input
											type='text'
											name='email'
											id='email'
											className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'
											placeholder='email@domain.com'
										/>
									</div>

									<div className='md:col-span-3'>
										<label for='address'>
											<span className='text-red-500'>* </span>Address / Street
										</label>
										<input
											type='text'
											name='address'
											id='address'
											className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'
											placeholder=''
										/>
									</div>

									<div className='md:col-span-2'>
										<label for='city'>
											<span className='text-red-500'>* </span>City
										</label>
										<input
											type='text'
											name='city'
											id='city'
											className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'
											placeholder=''
										/>
									</div>

									{/* <div className='md:col-span-2'>
										<label for='country'>Country / region</label>
										<div className='h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1'>
											<input
												name='country'
												id='country'
												placeholder='Country'
												className='px-4 appearance-none outline-none text-gray-800 w-full bg-transparent'
											/>
											<button
												tabindex='-1'
												className='cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600'>
												<svg
													className='w-4 h-4 mx-2 fill-current'
													xmlns='http://www.w3.org/2000/svg'
													viewBox='0 0 24 24'
													stroke='currentColor'
													stroke-width='2'
													stroke-linecap='round'
													stroke-linejoin='round'>
													<line x1='18' y1='6' x2='6' y2='18'></line>
													<line x1='6' y1='6' x2='18' y2='18'></line>
												</svg>
											</button>
											<button
												tabindex='-1'
												for='show_more'
												className='cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600'>
												<svg
													className='w-4 h-4 mx-2 fill-current'
													xmlns='http://www.w3.org/2000/svg'
													viewBox='0 0 24 24'
													stroke='currentColor'
													stroke-width='2'
													stroke-linecap='round'
													stroke-linejoin='round'>
													<polyline points='18 15 12 9 6 15'></polyline>
												</svg>
											</button>
										</div>
									</div> */}

									{/* <div className='md:col-span-2'>
										<label for='state'>State / province</label>
										<div className='h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1'>
											<input
												name='state'
												id='state'
												placeholder='State'
												className='px-4 appearance-none outline-none text-gray-800 w-full bg-transparent'
											/>
											<button
												tabindex='-1'
												className='cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600'>
												<svg
													className='w-4 h-4 mx-2 fill-current'
													xmlns='http://www.w3.org/2000/svg'
													viewBox='0 0 24 24'
													stroke='currentColor'
													stroke-width='2'
													stroke-linecap='round'
													stroke-linejoin='round'>
													<line x1='18' y1='6' x2='6' y2='18'></line>
													<line x1='6' y1='6' x2='18' y2='18'></line>
												</svg>
											</button>
											<button
												tabindex='-1'
												for='show_more'
												className='cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600'>
												<svg
													className='w-4 h-4 mx-2 fill-current'
													xmlns='http://www.w3.org/2000/svg'
													viewBox='0 0 24 24'
													stroke='currentColor'
													stroke-width='2'
													stroke-linecap='round'
													stroke-linejoin='round'>
													<polyline points='18 15 12 9 6 15'></polyline>
												</svg>
											</button>
										</div>
									</div> */}

									<div className='md:col-span-1'>
										<label for='zipcode'>
											<span className='text-red-500'>* </span>Zip Code
										</label>
										<input
											type='text'
											name='zipcode'
											id='zipcode'
											className='transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50'
											placeholder=''
										/>
									</div>

									<div className='md:col-span-5'>
										<label for='formFile' className='form-label inline-block mb-2 text-gray-700'>
											<span className='text-red-500'>* </span>Pictures related to Project
										</label>
										<input
											className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
											type='file'
											id='formFile'
										/>
									</div>
									<div className='md:col-span-5'>
										<label for='comment'>
											<span className='text-red-500'>* </span>Comments about Project
										</label>
										<input
											type='text'
											name='comment'
											id='comment'
											className='transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50'
											placeholder=''
										/>
									</div>

									{/* <div className='md:col-span-5'>
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

									{/* <div className='md:col-span-2'>
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

									<div className='md:col-span-5 mt-2 text-right'>
										<div className='inline-flex items-end'>
											<button className=' bg-primary transition hover:bg-darkPrimary text-white font-bold py-2 px-4 rounded'>
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

function QuoteDisclosure({ setTotal }) {
	return (
		<>
			<Disclosure>
				{({ open }) => (
					<>
						<Disclosure.Button className='flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'>
							<span>Color</span>
							<PlusIcon
								className={`${open ? 'hidden rotate-180 transform' : ''} h-5 w-5 text-purple-500`}
							/>
							<MinusIcon
								className={`${open ? ' rotate-180 transform' : 'hidden'} h-5 w-5 text-purple-500`}
							/>
						</Disclosure.Button>
						<Transition {...transitionAttributes}>
							<Disclosure.Panel className='px-4 pt-4 pb-2 text-sm text-gray-500'>
								<Radio category={plans} setTotal={setTotal}></Radio>
							</Disclosure.Panel>
						</Transition>
					</>
				)}
			</Disclosure>
			<Disclosure as='div' className='mt-5'>
				{({ open }) => (
					<>
						<Disclosure.Button className='flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'>
							<span>Size</span>
							<PlusIcon
								className={`${open ? 'hidden rotate-180 transform' : ''} h-5 w-5 text-purple-500`}
							/>
							<MinusIcon
								className={`${open ? ' rotate-180 transform' : 'hidden'} h-5 w-5 text-purple-500`}
							/>
						</Disclosure.Button>
						<Transition {...transitionAttributes}>
							<Disclosure.Panel className='px-4 pt-4 pb-2 text-sm text-gray-500'>
								<Radio category={sizes} setTotal={setTotal}></Radio>
							</Disclosure.Panel>
						</Transition>
					</>
				)}
			</Disclosure>
			<Disclosure as='div' className='mt-5'>
				{({ open }) => (
					<>
						<Disclosure.Button className='flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'>
							<span>Type</span>
							<PlusIcon
								className={`${open ? 'hidden rotate-180 transform' : ''} h-5 w-5 text-purple-500`}
							/>
							<MinusIcon
								className={`${open ? ' rotate-180 transform' : 'hidden'} h-5 w-5 text-purple-500`}
							/>
						</Disclosure.Button>
						<Transition {...transitionAttributes}>
							<Disclosure.Panel className='px-4 pt-4 pb-2 text-sm text-gray-500'>
								<Radio category={types} setTotal={setTotal}></Radio>
							</Disclosure.Panel>
						</Transition>
					</>
				)}
			</Disclosure>
		</>
	);
}
let style = {
	boxShadow: 'inset 0 0 8px 2px rgb(0,250,50) ',
};

let currentWindow;

function WindowType({ setWindowIndex }) {
	const [current, setCurrent] = useState([...Array(Windows.length)]);

	let i = 0;
	function change(num) {
		let temp = [...current];
		for (let i = 0; i < temp.length; i++) {
			if (num == i) {
				temp[i] = true;
				setWindowIndex(i);
			} else if (temp[i] == true) {
				temp[i] = undefined;
			}
		}

		setCurrent(temp);
	}

	const listItems = Windows.map((window, index) => (
		<div
			onClick={() => change(index)}
			className={` ${
				current[index] ? 'selected ' : 'hover:drop-shadow-xl'
			}  border-solid border-2 hover: border-gray-400 flex flex-col items-center justify-center h-32 w-32 p-2 bg-white`}>
			<img className='h-24' src={window[0]} />
			<div className='text-textPrimary'>{window[1]}</div>
		</div>
	));

	return (
		<div className='my-10'>
			<div className=' text-3xl'>Window Type</div>
			<div className='text-textPrimary'>Choose what type of window you want for this project</div>
			<div className='mt-5 grid grid-cols-2 quotesm:grid-cols-3 quotemd:grid-cols-4 quotelg:grid-cols-5  xl:grid-cols-6  gap-4'>
				{listItems}
				{/* <div
					onClick={() => change(1)}
					className={` ${
						current[1] ? 'selected' : 'hover:drop-shadow-xl'
					}  border-solid border-2 hover: border-gray-400 flex flex-col items-center justify-center h-36 w-36 bg-white`}>
					<img className='h-28' src={wimg1} />
					<div className='text-textPrimary'>Sindfdfgle Hung</div>
				</div>
				<div
					onClick={() => change(2)}
					className={` ${
						current[2] ? 'selected' : 'hover:drop-shadow-xl'
					}  border-solid border-2 hover: border-gray-400 flex flex-col items-center justify-center h-36 w-36 bg-white`}>
					<img className='h-28' src={wimg1} />
					<div className='text-textPrimary'>Singsdfdfle Hung</div>
				</div>
				<div style={style} className='h-24 w-24 bg-white'>
					<img className='h-20 mx-auto' src={wimg2} />
					<div>Double Hung</div>
				</div>
				<div className='h-24 w-24 bg-white'>
					<img className='h-20 mx-auto' src={wimg3} />
					<div></div>
				</div> */}
			</div>
		</div>
	);
}

function GrillesType() {
	return (
		<div className='my-10'>
			<div className=' text-3xl'>Grilles Pattern</div>
			<div className='text-textPrimary'>Choose what type of grille you want for this project</div>
			<div className='mt-5 flex justify-evenly'></div>
		</div>
	);
}

function WoodType() {
	return (
		<div className='my-10'>
			<div className=' text-3xl'>Wood Type</div>
			<div className='text-textPrimary'>Choose what type of wood you want for this project</div>
			<div className='mt-5 flex justify-evenly'></div>
		</div>
	);
}

// Complete This one
function MeasurementType() {
	return (
		<div className='my-10'>
			<div className=' text-3xl'>Measurement Pattern</div>
			<div className='text-textPrimary'>
				(Optional) Tell us the measurement of your window if you have it
			</div>
			<div className='mt-5 flex justify-evenly'></div>
		</div>
	);
}

// Complete This one
function GlassType({ setGlassIndex }) {
	const [current, setCurrent] = useState([...Array(3)]);
	let index;

	function change(num) {
		let temp = [...current];
		for (let i = 0; i < temp.length; i++) {
			if (num == i) {
				setGlassIndex(i);
				temp[i] = true;
			} else if (temp[i] == true) {
				temp[i] = undefined;
			}
		}
		setCurrent(temp);
	}

	return (
		<div className='my-10'>
			<div className=' text-3xl'>Glass Type</div>
			<div className='text-textPrimary'>
				Choose what type of interior color you want for this project
			</div>
			<div className='mt-5 grid grid-cols-2 gap-4'>
				<div
					onClick={() => change(0)}
					className={` ${
						current[0] ? 'selected ' : 'hover:drop-shadow-xl'
					}  border-solid font-medium  border-2 hover: border-gray-400 flex flex-col items-center justify-center h-32 p-2 bg-white`}>
					<div className=' text-3xl text-textPrimary'>Fiberglass</div>
				</div>
				<div
					onClick={() => change(1)}
					className={` ${
						current[1] ? 'selected ' : 'hover:drop-shadow-xl'
					}  border-solid font-medium  border-2 hover: border-gray-400 flex flex-col items-center justify-center h-32 p-2 bg-white`}>
					<div className='text-3xl text-textPrimary'>Vinyl</div>
				</div>
				<div
					onClick={() => change(2)}
					className={` ${
						current[2] ? 'selected ' : 'hover:drop-shadow-xl'
					}  border-solid font-medium  border-2 hover: border-gray-400 flex flex-col items-center justify-center h-32  p-2 bg-white`}>
					<div className='text-3xl text-textPrimary'>Wood</div>
				</div>
			</div>
		</div>
	);
}

function ExteriorColorType() {
	const [current, setCurrent] = useState([...Array(Colors.exterior.length)]);

	function change(num) {
		let temp = [...current];
		for (let i = 0; i < temp.length; i++) {
			if (num == i) {
				temp[i] = true;
			} else if (temp[i] == true) {
				temp[i] = undefined;
			}
		}
		setCurrent(temp);
	}

	const listItems = Colors.exterior.map((color, index) => (
		<div
			onClick={() => change(index)}
			className={` ${
				current[index] ? 'selected ' : 'hover:drop-shadow-xl'
			}  border-solid border-2 hover: border-gray-400 flex flex-col items-center justify-center h-40 w-32 p-2 bg-white`}>
			<img className='h-24' src={color[0]} />
			<div className='text-textPrimary text-center '>{color[1]}</div>
		</div>
	));

	return (
		<div className='my-10'>
			<div className=' text-3xl'>Exterior Color</div>
			<div className='text-textPrimary'>
				Choose what type of exterior color you want for this project
			</div>
			<div className='mt-5 grid grid-cols-2 quotesm:grid-cols-3 quotemd:grid-cols-4 quotelg:grid-cols-5  xl:grid-cols-6  gap-4'>
				{listItems}
			</div>
		</div>
	);
}

function InteriorColorType() {
	const [current, setCurrent] = useState([...Array(Colors.interior.length)]);

	function change(num) {
		let temp = [...current];
		for (let i = 0; i < temp.length; i++) {
			if (num == i) {
				temp[i] = true;
			} else if (temp[i] == true) {
				temp[i] = undefined;
			}
		}
		setCurrent(temp);
	}

	const listItems = Colors.interior.map((color, index) => (
		<div
			onClick={() => change(index)}
			className={` ${
				current[index] ? 'selected ' : 'hover:drop-shadow-xl'
			}  border-solid border-2 hover: border-gray-400 flex flex-col items-center justify-center h-40 w-32 p-2 bg-white`}>
			<img className='h-24' src={color[0]} />
			<div className='text-textPrimary text-center '>{color[1]}</div>
		</div>
	));

	return (
		<div className='my-10'>
			<div className=' text-3xl'>Interior Color</div>
			<div className='text-textPrimary'>Choose what type of window you want for this project</div>
			<div className='mt-5 grid grid-cols-2 quotesm:grid-cols-3 quotemd:grid-cols-4 quotelg:grid-cols-5  xl:grid-cols-6  gap-4'>
				{listItems}
			</div>
		</div>
	);
}
// {`${open ? 'hidden rotate-180 transform' : ''} h-5 w-5 text-purple-500`}

const WindowView = ({ windowIndex, className, isModal }) => {
	return (
		<div className={`sticky w-1/3 bg-gray-100 ${className}`}>
			<div className='flex p-2 flex-col items-center justify-between w-4/5 mx-auto border shadow-xl border-gray-700 sticky windowModal  bg-white'>
				{!isModal && (
					<img
						className='mt-4  h-40 w-40'
						src={windowIndex != null ? Windows[windowIndex][0] : img2}
						alt=''
					/>
				)}
				<div className='text-2xl text-textPrimary'>Window: Room 1</div>
				<div className='flex w-full px-4 m-4 h-12 gap-4'>
					<div className='flex border items-center justify-around  border-black w-1/3 bg-white'>
						<MinusCircleIcon className='h-5'></MinusCircleIcon>
						<div>1</div>
						<PlusCircleIcon className='h-5'></PlusCircleIcon>
					</div>

					<div className='flex flex-row border border-black items-center m-0 justify-center gap-3 w-2/3 bg-quotePrimary'>
						<ShoppingCartIcon className=' h-5'></ShoppingCartIcon>
						<div className=''>Add to Project</div>
					</div>
				</div>
			</div>
		</div>
	);
};

function OldQuote() {
	const [total, setTotal] = useState(0);
	const { price } = useContext(PriceContext);

	const addTotal = (value) => {
		setTotal(total + value);
		console.log('passed');
	};

	return (
		<div className=' flex relative overflow-auto flex-col md:flex-row mb-20 justify-around align-center'>
			<div className='rounded relative  w-full px-4 pt-16'>
				<div className=' mx-auto w-full max-w-md rounded-2xl bg-gray-100 p-2 drop-shadow-xl'>
					<div className='text-purple-900 text-center mb-4 text-4xl '>Quote</div>
					<div className='text-purple-900 text-center mb-4 text-lg '>
						Choose from a variety of options
					</div>

					<QuoteDisclosure setTotal={setTotal}></QuoteDisclosure>
					<div className='bg-yellow-50'>
						<div className='text-purple-900 text-center mt-4 text-2xl '>Total Price:</div>
						<div className='text-purple-900 font-bold text-center text-2xl '>${price}</div>
					</div>
				</div>
			</div>
			<div className='flex flex-col  items-center w-full'>
				<div className=' w-full pb-10 px-4  mt-16 bg-slate-200 drop-shadow-xl  max-w-md  lg:max-w-2xl rounded-2xl p-2 '>
					<div className='text-purple-900 text-5xl mt-10 mb-2  text-center'>Window</div>
					<Image className=''></Image>
				</div>
			</div>
			{/*
  <div className=" flex justify-center align-center bg-red-600 w-1/2">
    <img className="max-h-40 md:max-h-60 " src={img2}></img>
  </div> */}
			{/* <Three className=" bg-red-300 "></Three> */}
			{/* <Arch
    style={{ fill: 'orange', filter: 'blur' }}
    className='max-w-full w-2/5 bg-red-500 h-auto'></Arch> */}
			{/* <button onClick={} */}
		</div>
	);
}

function useVisibility(offset = 0) {
	const [isVisible, setIsVisible] = useState(true);
	const currentElement = useRef(null);

	const onScroll = () => {
		if (!currentElement.current) {
			setIsVisible(false);
			return;
		}
		const bottom = currentElement.current.getBoundingClientRect().bottom;
		setIsVisible(bottom + offset >= 0 && bottom - offset <= window.innerHeight);
	};

	useEffect(() => {
		document.addEventListener('scroll', onScroll, true);
		return () => document.removeEventListener('scroll', onScroll, true);
	});

	return [isVisible, currentElement];
}

export default function Quote() {
	const [windowIndex, setWindowIndex] = useState();
	const [glassIndex, setGlassIndex] = useState();

	const [beforeCheckoutSubmitShown, beforeCheckoutSubmitRef] = useVisibility(true);
	console.log(beforeCheckoutSubmitShown);
	return (
		<div id='' className='relative'>
			<Masthead img={img1} title={'Get Quote'}></Masthead>
			{/* <div className='flex relative mb-20 justify-between align-center'> */}
			<div className=' bg-white p-10'>
				<div className='container text-center mx-auto py-5'>
					<div className='text-2xl font-semibold text-gray-800 '>Design Options</div>

					<div className='text-textPrimary'>Build your product by selecting options below</div>
				</div>
			</div>
			<div ref={beforeCheckoutSubmitRef}>
				<WindowView className='w-full md:hidden pt-4' windowIndex={windowIndex}></WindowView>
			</div>

			{!beforeCheckoutSubmitShown ? (
				<WindowView
					onLoad={console.log('test')}
					isModal={true}
					className='appear top-20 md:top-20 md:hidden absolute z-10 bg-transparent w-full'></WindowView>
			) : null}

			<div className='flex flex-col md:flex-row bg-gray-100 h-full'>
				<WindowView windowIndex={windowIndex} className='hidden pt-10 mb-5 md:block'></WindowView>
				<div className='md:w-2/3 m-4'>
					<WindowType setWindowIndex={setWindowIndex}></WindowType>
					<GlassType setGlassIndex={setGlassIndex}></GlassType>

					{windowIndex != null && glassIndex != null ? (
						<div>
							<MeasurementType></MeasurementType>
							<InteriorColorType></InteriorColorType>
							<ExteriorColorType></ExteriorColorType>
							<div className='border p-2 flex flex-col justify-center border-gray-500 bg-yellow-100'>
								<div className='font-bold text-textPrimary text-center  text-2xl '>
									Total Price:
								</div>
								<div className=' text-black font-semibold text-center text-4xl '>$500</div>
							</div>
						</div>
					) : (
						<div className='border p-2 flex flex-col justify-center border-gray-500 bg-yellow-100'>
							<div className='font-bold text-textPrimary text-center  text-2xl '>
								Select Window and Glass Types to see all other options
							</div>
						</div>
					)}
				</div>
			</div>
			{windowIndex != null && glassIndex != null ? <Form></Form> : null}
		</div>
	);
}
