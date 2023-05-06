import { useContext } from 'react';
import { PriceContext } from '../context/Context';
import ArchTall from '../assets/windows/archTall';
import Rectangle from '../assets/windows/rectangle';
import Square from '../assets/windows/square';

function SVGPicker() {
	return <SVG></SVG>;
}

function SVG() {
	const { category } = useContext(PriceContext);
	let frame = category.frame;
	let size = category.size;
	let color = customColor(category.color);
	let view;
	switch (frame) {
		case 'Arch':
			view = CustomArch(size);
			return <ArchTall view={view} color={color} />;
		case 'Rectangular':
			view = customRectangle(size);
			return <Rectangle view={view} color={color} />;
		case 'Square':
			view = customSquare(size);
			return <Square view={view} color={color} />;
		default:
			return <></>;
	}
}

function CustomArch(size) {
	switch (size) {
		case 'Large':
			return '-60 300 1890 1200';
		case 'Medium':
			return ' -60 300 1890 940';
		case 'Small':
			return ' -60 300 1890 687';
		default:
			'-60 300 1890 1200';
	}
}
function customRectangle(size) {
	switch (size) {
		case 'Large':
			return '-10 200 1890 1400';
		case 'Medium':
			return ' -10 300 1890 805';
		case 'Small':
			return ' -575 300 2990 805';
		default:
			'-10 200 1890 1400';
	}
}
function customSquare(size) {
	switch (size) {
		case 'Large':
			return '-50 300 1890 1220';
		case 'Medium':
			return '-300 300 2390 1220';
		case 'Small':
			return '-625 300 2990 1220';
		default:
			'-50 300 1890 1220';
	}
}
function customColor(color) {
	switch (color) {
		case 'White':
			return 'hsl(0, 0%, 95%)';
		case 'Brown':
			return 'rgb(201,178,152)';
		case 'Black':
			return ' hsl(0, 0%, 25%)';
		default:
			'rgb(201,178,152)';
	}
}

const ArchStyle = {
	background: 'red',
};

function CustomSquare() {}
function CustomRectangle() {}

export default SVGPicker;
