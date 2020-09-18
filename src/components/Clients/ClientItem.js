import React from 'react';
import { MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBIcon } from 'mdbreact';

const ClientItem = ({ client }) => {
	const { name, image, review } = client;
	return (
		<MDBCol lg='4' className='mx-auto my-3'>
			<MDBCard
				style={{
					backgroundColor: '#fff0',
					height: '100%',
					boxShadow:
						'rgb(255 255 255 / 5%) -1vmin -1vmin 1vmin, rgb(0 0 0 / 30%) 1vmin 1vmin 1vmin',
				}}
				className='text-center pb-5'
			>
				<img
					src={image}
					style={{
						width: '180px',
						borderRadius: '50%',
						boxShadow:
							'rgb(255 255 255 / 5%) -1vmin -1vmin 1vmin, rgb(0 0 0 / 30%) 1vmin 1vmin 1vmin',
					}}
					className='img-fluid mx-auto my-3'
				/>
				<MDBCardTitle className='mb-1 font-weight-bold'>
					{name}
				</MDBCardTitle>
				<MDBCardBody className='font-italic'>
					<MDBIcon icon='quote-left' className='mr-2' />
					{review}
				</MDBCardBody>
				<div
					style={{
						position: 'absolute',
						bottom: '20px',
						left: '0',
						right: '0',
					}}
				>
					{[...Array(5)].map((e, i) => (
						<MDBIcon icon='star' className='mx-1' />
					))}
				</div>
			</MDBCard>
		</MDBCol>
	);
};

export default ClientItem;
