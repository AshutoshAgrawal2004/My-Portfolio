import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBIcon } from 'mdbreact';

const ClientItem = ({ client }) => {
	const { name, image, review } = client;
	return (
		<MDBCard className='client-item pb-5 mx-md-3 mx-2'>
			<img src={image} alt={name} className='img-fluid mx-auto my-3' />
			<MDBCardTitle className='mb-1 font-weight-bold'>{name}</MDBCardTitle>
			<MDBCardBody className='font-italic px-1 px-md-2'>
				<MDBIcon icon='quote-left' className='mr-2' />
				{review}
			</MDBCardBody>
			<div className='star-box'>
				{[...Array(5)].map((e, i) => (
					<MDBIcon icon='star' className='mx-1' />
				))}
			</div>
		</MDBCard>
	);
};

export default ClientItem;
