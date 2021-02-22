import React from 'react';
import { MDBContainer } from 'mdbreact';
import { Helmet } from 'react-helmet';
import Slider from 'react-slick';

import ClientData from './ClientData';
import ClientItem from './ClientItem';

const Clients = () => {
	const settings = {
		className: 'center',
		centerMode: true,
		infinite: true,
		centerPadding: '60px',
		slidesToShow: 3,
		slidesToScroll: 1,
		speed: 500,
		dots: true,
		draggable: true,
		// lazyLoad: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerPadding: '60px',
				},
			},
		],
	};
	return (
		<>
			<Helmet>
				<title>Clients</title>
			</Helmet>
			<MDBContainer style={{ maxWidth: '1200px' }} className='my-5'>
				<h1 className='section-title'>Testimonials</h1>
				<p className='text-center'>
					Some of My Clients from{' '}
					<a
						href='https://www.freelancer.com/u/Ashu20040808'
						target='_blank'
						className='white-text font-weight-bold'
						rel='noopener noreferrer'
					>
						Freelancer.com
					</a>
				</p>
				<Slider {...settings}>
					{ClientData.map((client, i) => (
						<ClientItem client={client} key={i} />
					))}
				</Slider>
			</MDBContainer>
		</>
	);
};

export default Clients;
