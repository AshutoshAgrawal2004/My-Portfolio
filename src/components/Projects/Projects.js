import React from 'react';
import { MDBContainer, MDBRow } from 'mdbreact';

import ProjectData from './ProjectData';
import ProjectItem from './ProjectItem';
import { Helmet } from 'react-helmet';

const Projects = ({ history }) => {
	return (
		<>
			<Helmet>
				<title>Projects</title>
			</Helmet>
			<h1 className='text-center font-weight-bold my-3'>Projects</h1>
			<p className='text-center'>Click on a project to view details</p>
			<MDBRow>
				{ProjectData.map((project, i) => (
					<ProjectItem project={project} history={history} i={i} key={i} />
				))}
			</MDBRow>
		</>
	);
};

export default Projects;
