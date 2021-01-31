import React, { useState } from 'react';
import { MDBContainer, MDBRow } from 'mdbreact';
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
		slidesToScroll: 3,
		speed: 500,
		dots: true,
		draggable: true,
		responsive: [
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<MDBContainer style={{ maxWidth: '1200px' }} className='my-5'>
			<h1 className='text-center font-weight-bold my-3'>Testimonials</h1>
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
			{/* <MDBRow> */}
			<Slider {...settings}>
				{ClientData.map((client, i) => (
					<ClientItem client={client} />
				))}
			</Slider>
			{/* </MDBRow> */}
		</MDBContainer>
	);
};

export default Clients;
