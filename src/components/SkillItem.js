import React from 'react';
import PropTypes from 'prop-types';

import { MDBCol, MDBCard, MDBCardImage, MDBView, MDBMask } from 'mdbreact';
import SkillData from './SkillData';

const SkillItem = ({ skill, i }) => {
	return (
		<MDBCol xs='6' md='4' lg='2' className='my-3'>
			<MDBCard
				className='p-3'
				style={{
					borderRadius: '0',
					// boxShadow: '8px 8px 0 rgba(0,0,0,.15)',
					boxShadow:
						'-1vmin -1vmin 2vmin 1vmin #333, 1vmin 1vmin 1vmin #1e1e1e',
					height: '100%',
					backgroundColor: '#fff0',
					maxWidth: '150px',
				}}
			>
				<img
					src={SkillData[skill]}
					style={{ width: '100%', margin: 'auto 0' }}
					alt={skill}
					data-toggle='tooltip'
					title={skill}
				/>
			</MDBCard>
		</MDBCol>
	);
};

SkillItem.propTypes = {};

export default SkillItem;
