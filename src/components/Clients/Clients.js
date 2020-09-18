import React, { useState } from 'react';
import { MDBContainer, MDBRow } from 'mdbreact';

import ClientData from './ClientData';
import ClientItem from './ClientItem';

const Clients = () => {
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
			<MDBRow>
				{ClientData.map((client, i) => (
					<ClientItem client={client} />
				))}
			</MDBRow>
		</MDBContainer>
	);
};

export default Clients;
