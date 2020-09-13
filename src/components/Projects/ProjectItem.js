import React from 'react';
import PropTypes from 'prop-types';

import { MDBCol, MDBCard, MDBCardImage, MDBView, MDBMask } from 'mdbreact';

const ProjectItem = ({ project, i, toggleProjectDetail }) => {
	return (
		<MDBCol
			lg='6'
			className='mx-auto'
			onClick={(event) => {
				toggleProjectDetail(event, i);
			}}
		>
			<MDBCard
				className='my-3'
				style={{
					borderRadius: '0',
					// boxShadow: '8px 8px 0 rgba(0,0,0,.15)',
					boxShadow:
						'-1vmin -1vmin 2vmin 1vmin #333, 1vmin 1vmin 1vmin #1e1e1e',
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
