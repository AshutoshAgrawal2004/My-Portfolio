import React from 'react';
import PropTypes from 'prop-types';
import {
	MDBModal,
	MDBModalBody,
	MDBModalHeader,
	MDBBtn,
	MDBIcon,
	MDBRow,
} from 'mdbreact';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';

import SkillItem from '../Skills/SkillItem';

const ProjectDetail = ({
	project,
	toggleProjectDetail,
	projectDetailIsOpen,
}) => {
	const { title, images, about, liveLink, source, skills } = project;

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
				<MDBIcon
					icon='times'
					style={{ position: 'absolute', top: '10px', right: '10px' }}
					onClick={toggleProjectDetail}
				/>
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
				<div className='project-title-bar mt-3'>
					<h2>{project.title}</h2>
					<i></i>
				</div>
				<AwesomeSlider
					animation='cubeAnimation'
					className='mb-3'
					bullets={images.length === 1 ? false : true}
					organicArrows={images.length === 1 ? false : true}
				>
					{images.map((image, i) => (
						<div data-src={image} key={i} />
					))}
				</AwesomeSlider>
				{skills && (
					<>
						<h3 className='text-center font-weight-bold mt-5 mb-3'>
							Technologies Used
						</h3>
						<MDBRow className='pb-3'>
							{Object.keys(skills).map((skill, i) => (
								<SkillItem skill={skill} i={i} key={i} />
							))}
						</MDBRow>
					</>
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
