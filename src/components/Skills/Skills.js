import React from 'react';
import { MDBContainer, MDBRow } from 'mdbreact';

import SkillData from './SkillData';
import SkillItem from './SkillItem';

const Skills = () => {
	return (
		<>
			<h1 className='text-center font-weight-bold my-3'>My Toolbox</h1>
			<MDBRow>
				{Object.keys(SkillData).map((skill, i) => (
					<SkillItem skill={skill} i={i} key={i} />
				))}
			</MDBRow>
		</>
	);
};

export default Skills;
