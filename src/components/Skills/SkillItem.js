import React from 'react';

import { MDBCol, MDBCard } from 'mdbreact';
import SkillData from './SkillData';

const SkillItem = ({ skill, i }) => {
	return (
		<MDBCol
			size='4'
			md='3'
			lg='2'
			className='my-3 mx-auto'
			data-toggle='tooltip'
			title={skill}
		>
			<MDBCard
				className='skill-item p-3'
			>
				<img
					src={SkillData[skill]}
					alt={skill}
				/>
			</MDBCard>
		</MDBCol>
	);
};

export default SkillItem;
