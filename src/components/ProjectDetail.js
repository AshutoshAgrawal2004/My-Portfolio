import React from 'react';
import PropTypes from 'prop-types';
import {
	MDBModal,
	MDBModalBody,
	MDBModalHeader,
	MDBBtn,
	MDBIcon,
} from 'mdbreact';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';

const ProjectDetail = ({
	project,
	toggleProjectDetail,
	projectDetailIsOpen,
}) => {
	const { title, images, about, liveLink, source } = project;

	return (
		<MDBModal
			isOpen={projectDetailIsOpen}
			toggle={toggleProjectDetail}
			size='lg'
			centered
		>
			<MDBModalBody
				style={{
					backgroundColor: '#242424',
					minHeight: '90vh',
					textAlign: 'center',
				}}
			>
				<h3>{title}</h3>

				<p>{about}</p>
				<div className='text-center d-flex'>
					{liveLink && (
						<MDBBtn
							color='dark'
							onClick={() => {
								window.open(liveLink);
							}}
							className='mx-auto'
						>
							Visit Project
						</MDBBtn>
					)}
					{source && (
						<MDBBtn
							color='dark'
							onClick={() => {
								window.open(source);
							}}
							className='mx-auto'
						>
							View Source
						</MDBBtn>
					)}
				</div>
				<AwesomeSlider animation='cubeAnimation' className='my-3'>
					{images.map((image, i) => (
						<div data-src={image} key={i} />
					))}
				</AwesomeSlider>
			</MDBModalBody>
		</MDBModal>
	);
};

ProjectDetail.propTypes = {
	project: PropTypes.object.isRequired,
	projectDetailIsOpen: PropTypes.bool.isRequired,
	toggleProjectDetail: PropTypes.func.isRequired,
};

export default ProjectDetail;
