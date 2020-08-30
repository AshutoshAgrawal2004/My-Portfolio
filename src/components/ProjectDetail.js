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
				style={{ backgroundColor: '#242424', minHeight: '90vh' }}
			>
				<h3>{title}</h3>

				{about}

				<AwesomeSlider animation='cubeAnimation' className='my-5'>
					{images.map((image) => (
						<div data-src={image} />
					))}
				</AwesomeSlider>
				{liveLink && (
					<MDBBtn
						onClick={() => {
							window.open(liveLink);
						}}
					>
						Visit Project
					</MDBBtn>
				)}
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
