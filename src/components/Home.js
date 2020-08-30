import React from 'react';
import { MDBContainer, MDBView, MDBMask } from 'mdbreact';
import Background from './Background';
import Typewriter from 'typewriter-effect';
import { useMediaQuery } from 'react-responsive';

const Home = () => {
	const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });

	return (
		<MDBContainer className='m-0 p-0' style={{ backgroundColor: '#333' }}>
			<MDBView>
				<Background isPortrait={isPortrait} />

				<MDBMask overlay='stylish-strong'>
					<div
						className='content'
						style={{
							position: 'absolute',
							color: 'white',
							top: '40%',
							left: '0',
							right: '0',
							textAlign: 'center',
							// textShadow: '2px 2px 5px black',
						}}
					>
						<h3 style={{ fontWeight: '900' }}>Ashutosh Agrawal</h3>
						<h4>
							I am
							<Typewriter
								options={{
									strings: [
										'The Crazy One',
										'Full Stack Web Developer',
										'MERN Specialist',
										'Creative Coder',
									],
									autoStart: true,
									loop: true,
								}}
							/>
							{/* <Typewriter
								onInit={(typewriter) => {
									typewriter
										.changeDeleteSpeed(10)
										.typeString('I am a ')
										.typeString('Full Stack Web Developer')
										.pauseFor(100)
										.deleteChars(24)
										.typeString('MERN Specialist')
										.pauseFor(100)
										.deleteChars(15)
										.typeString('Creative Coder')
										.pauseFor(100)
										.deleteChars(14)
										.start();
								}}
							/> */}
						</h4>
					</div>
				</MDBMask>
			</MDBView>
		</MDBContainer>
	);
};

export default Home;
