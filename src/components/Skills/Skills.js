import React from 'react';
import { MDBRow } from 'mdbreact';
import { Helmet } from 'react-helmet';

import SkillData from './SkillData';
import SkillItem from './SkillItem';

const Skills = () => {
	return (
		<>
			<Helmet>
				<title>My Toolbox</title>
			</Helmet>
			<h1 className='section-title'>My Toolbox</h1>
			<MDBRow>
				{Object.keys(SkillData).map((skill, i) => (
					<SkillItem skill={skill} i={i} key={i} />
				))}
			</MDBRow>
		</>
	);
};

export default Skills;
