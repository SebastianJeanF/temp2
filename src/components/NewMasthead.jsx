export default function Masthead({ img, title, subtitle }) {
	const styles = {
		masthead: {
			// background: `url(../assets/${imgName})`,
			backgroundImage: `url(${img})`,
			// textShadow: '2px 2px 2px rgba(0, 0, 0, 0.2);',
			// minHeight: '35vh',
			// backgroundSize: 'cover',
			// backgroundPosition: 'center',
		},
	};

	return (
		<div>
			{/* <section className="bg-dark text-light p-5 p-lg-0 pt-lg-5 text-center">
      <Container>
        <div className="d-sm-flex text-center text-sm-start justify-content-between">
      <div className="m-2">
          <h1>My house <span className="text-warning">website</span>!</h1>
          <p className="lead my-4">Sebastian!</p>
          <button className="btn btn-primary btn-lg">Click to begin</button>
          </div>
        <Image className="img-fluid w-50" src={img2}  height={50} width={50} alt="image" /> 
        </div>
      </Container>
     </section> */}

			<div style={styles.masthead} id='animate-area' className='  about-title'>
				<div className='h-full flex flex-col justify-center items-center  '>
					<div className='about-title-header'>{title}</div>
					<hr className='mx-auto'></hr>
					{subtitle && <p>{subtitle}</p>}
				</div>
			</div>
		</div>
	);
}
