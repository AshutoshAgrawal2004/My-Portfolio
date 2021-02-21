import React from 'react';
import { MDBContainer, MDBView, MDBMask } from 'mdbreact';
import Background from './Background';
import Typewriter from 'typewriter-effect';
import { useMediaQuery } from 'react-responsive';

import BGL from '../images/Steve_landscape.jpg';
import BGP from '../images/Steve Portrait.jpg';
const Intro = () => {
	const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
	const backgroundImage = new Image();
	backgroundImage.src = isPortrait ? BGP : BGL;

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
						<h4 className='my-3'>I am</h4>
						<h3 style={{ fontWeight: '900' }}>Ashutosh Agrawal</h3>
						<h4 className='my-3'>
							<Typewriter
								options={{
									strings: [
										'The Crazy One',
										'A Full Stack Web Developer',
										'A MERN Specialist',
										'A Creative Coder',
									],
									changeDelay: 3,
									changeDeleteSpeed: 1,
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
