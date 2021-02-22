import React from 'react';

import { MDBCol, MDBCard, MDBCardImage } from 'mdbreact';

const ProjectItem = ({ history, project, i }) => {
	return (
		<MDBCol
			lg='6'
			className='project-item mx-auto'
			onClick={() => {
				history.push(`/projects/${i}/${project.title.replace(/ /g, '-')}`);
			}}
		>
			<MDBCard className='my-3'>
				<div className='project-title-bar'>
					<h2>{project.title}</h2>
					<i></i>
				</div>
				<MDBCardImage src={project.images[0]} style={{ width: '100%' }} />
			</MDBCard>
		</MDBCol>
	);
};

export default ProjectItem;
