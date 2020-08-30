import React from 'react';
import PropTypes from 'prop-types';

import { MDBCol, MDBCard, MDBCardImage, MDBView, MDBMask } from 'mdbreact';

const ProjectItem = ({ project, i, toggleProjectDetail }) => {
	return (
		<MDBCol
			lg='6'
			onClick={(event) => {
				toggleProjectDetail(event, project);
			}}
		>
			<MDBCard
				className='my-3'
				style={{
					borderRadius: '0',
					boxShadow: '8px 8px 0 rgba(0,0,0,.15)',
				}}
			>
				<div className='project-title-bar'>
					<h2>{project.title}</h2>
					<i></i>
				</div>
				<MDBCardImage
					src={project.images[0]}
					style={{ width: '100%' }}
				/>
			</MDBCard>
		</MDBCol>
	);
};

ProjectItem.propTypes = {};

export default ProjectItem;
