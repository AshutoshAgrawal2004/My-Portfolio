import React from 'react';
import { MDBContainer, MDBRow } from 'mdbreact';

import SkillData from './SkillData';
import SkillItem from './SkillItem';

const Skills = () => {
	return (
		<MDBContainer style={{ maxWidth: '900px' }} className='my-5'>
			<h1 className='text-center font-weight-bold my-3'>Skills</h1>
			<MDBRow>
				{Object.keys(SkillData).map((skill, i) => (
					<SkillItem skill={skill} i={i} key={i} />
				))}
				{/* {SkillData.map((skill, i) => (
					<SkillItem skill={skill} i={i} key={i} />
				))} */}
			</MDBRow>
		</MDBContainer>
	);
};

export default Skills;
