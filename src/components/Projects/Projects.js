import React from 'react';
import { MDBRow } from 'mdbreact';
import { Helmet } from 'react-helmet';

import ProjectData from './ProjectData';
import ProjectItem from './ProjectItem';

const Projects = ({ history }) => {
	return (
		<>
			<Helmet>
				<title>Projects</title>
			</Helmet>
			<h1 className='section-title'>Projects</h1>
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
