import React from 'react';
import { MDBContainer, MDBView, MDBMask } from 'mdbreact';
import Background from './Background';
import Typewriter from 'typewriter-effect';
import { useMediaQuery } from 'react-responsive';

const Intro = () => {
	const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });

	return (
		<MDBContainer
			className='m-0 p-0'
			style={{ backgroundColor: '#333', minHeight: '90vh' }}
		>
			<MDBView>
				<Background isPortrait={isPortrait} />
				<MDBMask overlay='black-strong'>
					<div
						className='content'
						style={{
							position: 'absolute',
							color: '#F9F6EF',
							top: '40%',
							left: '0',
							right: '0',
							textAlign: 'center',
							// textShadow: '2px 2px 5px black',
						}}
					>
						<h3 style={{ fontWeight: '900' }}>Ashutosh Agrawal</h3>
						<h4 className='my-3'>
							I am
							<Typewriter
								options={{
									strings: [
										'The Crazy One',
										'A Full Stack Web Developer',
										'A MERN Specialist',
										'A Creative Coder',
									],
									changeDelay: 10,
									changeDeleteSpeed: 5,
									autoStart: true,
									loop: true,
								}}
							/>
						</h4>
					</div>
				</MDBMask>
			</MDBView>
		</MDBContainer>
	);
};

export default Intro;
