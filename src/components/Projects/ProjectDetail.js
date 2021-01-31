import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
	MDBModal,
	MDBModalBody,
	MDBModalHeader,
	MDBBtn,
	MDBIcon,
	MDBRow,
	MDBCol,
} from 'mdbreact';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';

import SkillItem from '../Skills/SkillItem';
import ProjectData from './ProjectData';

const ProjectDetail = ({
	projectIndex,
	toggleProjectDetail,
	projectDetailIsOpen,
}) => {
	const [currentProjectIndex, setCurrentProjectIndex] = useState(projectIndex);

	useEffect(() => {
		setCurrentProjectIndex(projectIndex);
	}, [projectIndex]);

	const nextProject = () => {
		if (currentProjectIndex === ProjectData.length - 1) {
			setCurrentProjectIndex(0);
		} else {
			setCurrentProjectIndex(currentProjectIndex + 1);
		}
	};

	const prevProject = () => {
		if (currentProjectIndex === 0) {
			setCurrentProjectIndex(ProjectData.length - 1);
		} else {
			setCurrentProjectIndex(currentProjectIndex - 1);
		}
	};
	return (
		<MDBModal
			isOpen={projectDetailIsOpen}
			toggle={toggleProjectDetail}
			size='lg'
			centered
		>
			{/* <AwesomeSlider
					animation='cubeAnimation'
					className='mb-3'
					bullets={false}
					organicArrows={false}
			>
				
				</AwesomeSlider> */}
			<ProjectDetailCarousalItem
				currentProjectIndex={currentProjectIndex}
				toggleProjectDetail={toggleProjectDetail}
				nextProject={nextProject}
				prevProject={prevProject}
			/>
		</MDBModal>
	);
};

ProjectDetail.propTypes = {
	project: PropTypes.object.isRequired,
	projectDetailIsOpen: PropTypes.bool.isRequired,
	toggleProjectDetail: PropTypes.func.isRequired,
};

export default ProjectDetail;

const ProjectDetailCarousalItem = ({
	currentProjectIndex,
	toggleProjectDetail,
	nextProject,
	prevProject,
}) => {
	const [currentProject, setCurrentProject] = useState(
		ProjectData[currentProjectIndex]
	);

	useEffect(() => {
		setCurrentProject(ProjectData[currentProjectIndex]);
	}, [currentProjectIndex]);

	const { title, images, about, liveLink, source, skills } = currentProject;

	return (
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
			<h3 className='font-weight-bold'>{title}</h3>

			<p style={{ fontSize: '18px' }}>{about}</p>
			<MDBRow>
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
			</MDBRow>
			<div className='project-title-bar mt-3'>
				<h2>{title}</h2>
				<i></i>
			</div>
			<AwesomeSlider
				animation='cubeAnimation'
				className='mb-5'
				bullets={images.length === 1 ? false : true}
				organicArrows={images.length === 1 ? false : true}
			>
				{images.map((image, i) => (
					<div data-src={image} key={i} />
				))}
			</AwesomeSlider>
			<MDBRow className='mt-5 mb-3'>
				<MDBCol size='6' className='mx-auto'>
					<MDBBtn
						style={{
							display: 'flex',
							justifyContent: 'space-around',
							alignItems: 'baseline',
							width: '100%',
						}}
						color='dark'
						onClick={prevProject}
					>
						<MDBIcon icon='angle-double-left' />
						Prev Project
					</MDBBtn>
				</MDBCol>
				<MDBCol size='6' className='mx-auto'>
					<MDBBtn
						style={{
							display: 'flex',
							justifyContent: 'space-around',
							alignItems: 'baseline',
							width: '100%',
						}}
						color='dark'
						onClick={nextProject}
					>
						Next Project
						<MDBIcon icon='angle-double-right' />
					</MDBBtn>
				</MDBCol>
			</MDBRow>
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
	);
};
