import { createContext, useState, useRef, useEffect } from 'react';

export const PriceContext = createContext();
export const TypeContext = createContext();

function Context({ children }) {
	const [price, setPrice] = useState(0);
	const [categoryPrice, setCategoryPrice] = useState({
		sizePrice: 0,
		colorPrice: 0,
		framePrice: 0,
	});
	const ref = useRef(categoryPrice);

	const [category, setCategory] = useState({
		size: 'Extra Large',
		frame: 'Arch',
		color: 'Brown',
	});

	const categoryRef = useRef(category);

	const changePrice = (plan) => {
		let type = plan.type;
		let itemPrice = plan.price;
		console.log(type, itemPrice);

		switch (type) {
			case 'color':
				setCategoryPrice((prevCategoryPrice, type) => ({
					...prevCategoryPrice,
					colorPrice: itemPrice,
				}));
				ref.current.colorPrice = itemPrice;
				categoryRef.current.color = plan.name;
				break;
			case 'size':
				setCategoryPrice((prevCategoryPrice, type) => ({
					...prevCategoryPrice,
					sizePrice: itemPrice,
				}));
				ref.current.sizePrice = itemPrice;
				categoryRef.current.size = plan.name;

				break;
			case 'frame':
				setCategoryPrice((prevCategoryPrice, type) => ({
					...prevCategoryPrice,
					framePrice: itemPrice,
				}));
				ref.current.framePrice = itemPrice;
				categoryRef.current.frame = plan.name;

				break;
		}
		setPrice(
			// console.log('prevCategoryPrice:' + prevCategoryPrice);
			// itemPrice;
			ref.current.colorPrice + ref.current.sizePrice + ref.current.framePrice
		);
		setCategory({
			size: categoryRef.current.size,
			frame: categoryRef.current.frame,
			color: categoryRef.current.color,
		});
	};
	console.log(category);
	return (
		<PriceContext.Provider value={{ category, price, changePrice }}>
			{children}
		</PriceContext.Provider>
	);
	// return <PriceContext.Provider value={{ price, changePrice }}>{children}</PriceContext.Provider>;
}

export default Context;
