import React, { useState } from 'react';
import { MDBContainer, MDBRow } from 'mdbreact';

import ProjectData from './ProjectData';
import ProjectItem from './ProjectItem';
import ProjectDetail from './ProjectDetail';

const Projects = () => {
	const [projectDetailIsOpen, setProjectDetailIsOpen] = useState(false);
	const [currentProject, setCurrentProject] = useState(ProjectData[0]);

	const toggleProjectDetail = (event, project) => {
		if (project) setCurrentProject(project);
		setProjectDetailIsOpen(!projectDetailIsOpen);
	};

	return (
		<MDBContainer style={{ maxWidth: '900px' }} className='my-5'>
			<ProjectDetail
				project={currentProject}
				toggleProjectDetail={toggleProjectDetail}
				projectDetailIsOpen={projectDetailIsOpen}
			/>
			<h1 className='text-center font-weight-bold my-3'>Projects</h1>
			<MDBRow>
				{ProjectData.map((project, i) => (
					<ProjectItem
						project={project}
						i={i}
						toggleProjectDetail={toggleProjectDetail}
						key={i}
					/>
				))}
			</MDBRow>
		</MDBContainer>
	);
};

export default Projects;
