function Masthead({ img, title, message }) {
	const styles = {
		masthead: {
			// background: `url(../assets/${imgName})`,
			background: `url(${img})`,
			textShadow: '2px 2px 2px rgba(0, 0, 0, 0.2);',
			minHeight: '35vh',
			backgroundSize: 'cover',
			backgroundPosition: 'center',
		},
		overlay: {
			background: 'rgba(0,0,0,.2)',
		},
	};

	return (
		<div className='transition text-white relative bg-cover bg-center' style={styles.masthead}>
			<div
				style={styles.overlay}
				className='absolute h-full w-full flex justify-center items-center'>
				<div className='flex-col text-center '>
					<div className='font-bold home-test text-5xl mb-9'>{title}</div>
					<div className='font-bold text-xl'>{message || ''}</div>
				</div>
			</div>
		</div>
	);
}

export default Masthead;
