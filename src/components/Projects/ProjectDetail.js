import React from 'react';
import {
	MDBContainer,
	MDBBtn,
	MDBIcon,
	MDBRow,
	MDBCol,
	MDBCard,
} from 'mdbreact';
import { Helmet } from 'react-helmet';

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';

import SkillItem from '../Skills/SkillItem';
import ProjectData from './ProjectData';

const ProjectDetail = ({ history, match }) => {
	const projectIndex = Number(match.params.index);

	const nextProject = () => {
		const newIndex =
			ProjectData.length > projectIndex + 1 ? projectIndex + 1 : 0;
		history.push(
			`/projects/${newIndex}/${ProjectData[newIndex].title.replace(/ /g, '-')}`
		);
	};

	const prevProject = () => {
		const newIndex =
			projectIndex - 1 >= 0 ? projectIndex - 1 : ProjectData.length - 1;
		history.push(
			`/projects/${newIndex}/${ProjectData[newIndex].title.replace(/ /g, '-')}`
		);
	};

	const goBack = () => {
		history.push('/projects');
	};

	return (
		<>
			<Helmet>
				<title>{ProjectData[projectIndex].title}</title>
			</Helmet>
			<MDBCard className='project-detail-card my-5 p-3'>
				<ProjectDetailCarousalItem
					projectIndex={projectIndex}
					nextProject={nextProject}
					prevProject={prevProject}
					goBack={goBack}
				/>
			</MDBCard>
		</>
	);
};

export default ProjectDetail;

const ProjectDetailCarousalItem = ({
	projectIndex,
	nextProject,
	prevProject,
	goBack,
}) => {
	const currentProject = ProjectData[projectIndex];

	const { title, images, about, liveLink, source, skills } = currentProject;

	return (
		<>
			<MDBIcon icon='times' onClick={goBack} className='go-back' />
			<h3 className='font-weight-bold'>{title}</h3>

			<p style={{ fontSize: '1.25rem' }}>{about}</p>
			<MDBRow>
				{liveLink && (
					<MDBBtn
						color='dark'
						onClick={() => {
							window.open(liveLink);
						}}
						className='mx-auto'
					>
						Visit Project &nbsp; <MDBIcon icon='globe' />
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
						View Source &nbsp; <MDBIcon fab icon='github' />
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
						className='project-controls'
						color='dark'
						onClick={prevProject}
					>
						<MDBIcon icon='angle-double-left' />
						Prev Project
					</MDBBtn>
				</MDBCol>
				<MDBCol size='6' className='mx-auto'>
					<MDBBtn
						className='project-controls'
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
		</>
	);
};
