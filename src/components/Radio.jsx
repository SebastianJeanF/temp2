import { useState, useContext } from 'react';
import { RadioGroup } from '@headlessui/react';
import { PriceContext } from '../context/Context';
const test = 40;

function total() {
	let value = 0;
	for (let i = 0; i < plans.length; i++) {
		value += plans[i].price;
	}
	return value;
}

export default function Radio({ category, setTotal }) {
	const [selected, setSelected] = useState(category[0]);
	const { price, changePrice } = useContext(PriceContext);

	// const changePrice = (plan) => {
	// 	let type = plan.type;
	// 	let itemPrice = plan.price;
	// 	console.log(type, itemPrice);
	// 	switch (type) {
	// 		case 'color':
	// 			setCategoryPrice((prevCategoryPrice, type) => ({
	// 				...prevCategoryPrice,
	// 				colorPrice: itemPrice,
	// 			}));
	// 			break;
	// 		case 'size':
	// 			setCategoryPrice((prevCategoryPrice, type) => ({
	// 				...prevCategoryPrice,
	// 				sizePrice: itemPrice,
	// 			}));
	// 			break;
	// 		case 'frame':
	// 			setCategoryPrice((prevCategoryPrice, type) => ({
	// 				...prevCategoryPrice,
	// 				framePrice: itemPrice,
	// 			}));
	// 			break;
	// 	}
	// 	setPrice(categoryPrice.sizePrice + categoryPrice.colorPrice + categoryPrice.framePrice);
	// 	console.log(categoryPrice);
	// 	console.log('This is the new price: ' + price);
	// };

	return (
		<div className='w-full  px-2 py-2'>
			<div className='mx-auto w-full max-w-md'>
				<RadioGroup value={selected} onChange={setSelected}>
					<RadioGroup.Label className='sr-only'>Server size</RadioGroup.Label>
					{/* onClick={setTotal(total())} */}
					<div className='space-y-2'>
						{/* Individual Radio Item */}
						{category.map((plan) => (
							<RadioGroup.Option
								key={plan.name}
								value={plan}
								onFocus={() => changePrice(plan)}
								className={({ active, checked }) =>
									`${
										active
											? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300'
											: ''
									}
                  ${checked ? 'bg-sky-900 bg-opacity-75 text-white' : 'bg-white'}
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
								}>
								{({ active, checked }) => (
									<>
										<div className='flex w-full items-center justify-between'>
											<div className='flex items-center'>
												<div className='text-sm'>
													<RadioGroup.Label
														as='p'
														className={`font-medium  ${checked ? 'text-white' : 'text-gray-900'}`}>
														{plan.name}
													</RadioGroup.Label>
													<RadioGroup.Description
														as='span'
														className={`inline ${checked ? 'text-sky-100' : 'text-gray-500'}`}>
														<span>${plan.price}</span>{' '}
														{/* <span aria-hidden="true">&middot;</span>{' '}
                            <span>{plan.disk}</span> */}
													</RadioGroup.Description>
												</div>
											</div>
											{checked && (
												<div className='shrink-0 text-white'>
													<CheckIcon className='h-6 w-6' />
												</div>
											)}
										</div>
									</>
								)}
							</RadioGroup.Option>
						))}
						{/* End of Individual Radio Item */}
					</div>
				</RadioGroup>
			</div>
		</div>
	);
}

function CheckIcon(props) {
	return (
		<svg viewBox='0 0 24 24' fill='none' {...props}>
			<circle cx={12} cy={12} r={12} fill='#fff' opacity='0.2' />
			<path
				d='M7 13l3 3 7-7'
				stroke='#fff'
				strokeWidth={1.5}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
}
