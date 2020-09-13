import React from 'react';
import PropTypes from 'prop-types';

import { MDBCol, MDBCard, MDBCardImage, MDBView, MDBMask } from 'mdbreact';
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
				className='p-3'
				style={{
					borderRadius: '0',
					// boxShadow: '8px 8px 0 rgba(0,0,0,.15)',
					// boxShadow:
					// 	'-1vmin -1vmin 2vmin 1vmin #333, 1vmin 1vmin 1vmin #1e1e1e',
					boxShadow:
						'rgb(255 255 255 / 5%) -1vmin -1vmin 1vmin, rgb(0 0 0 / 30%) 1vmin 1vmin 1vmin',
					height: '100%',
					backgroundColor: '#fff0',
					maxWidth: '150px',
				}}
			>
				<img
					src={SkillData[skill]}
					style={{ width: '100%', margin: 'auto 0' }}
					alt={skill}
				/>
			</MDBCard>
		</MDBCol>
	);
};

SkillItem.propTypes = {};

export default SkillItem;
