import React from 'react';
import { MDBContainer, MDBView, MDBMask } from 'mdbreact';
import Background from './Background';

const Home = () => {
	return (
		<MDBContainer className='m-0 p-0' style={{ backgroundColor: '#333' }}>
			<MDBView>
				<Background />

				<MDBMask overlay='stylish-strong'>
					<div
						className='content'
						style={{
							position: 'absolute',
							color: 'white',
							top: '50%',
							left: '0',
							right: '0',
							textAlign: 'center',
							// textShadow: '2px 2px 5px black',
						}}
					>
						<h3 style={styles.heading}>
							Hello, My name is Ashutosh Agrawal
						</h3>
						<h4 style={styles.heading}>
							I am a Full Stack Web Developer, Creative Coder and
							MERN Specialist.
						</h4>
					</div>
				</MDBMask>
			</MDBView>
		</MDBContainer>
	);
};

const styles = {
	heading: {
		fontWeight: '900',
	},
};

export default Home;
