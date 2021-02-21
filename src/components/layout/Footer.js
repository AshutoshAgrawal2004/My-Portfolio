import React from 'react';
import { MDBContainer, MDBRow, MDBFooter, MDBIcon } from 'mdbreact';
import SLIcon from '../images/sololearnIcon.svg';

const Footer = () => {
	return (
		<MDBFooter className='page-footer font-small pt-0 mt-5 footer main-footer'>
			<MDBContainer fluid className='text-center text-md-left social-footer'>
				<MDBRow
					className='pt-4 d-flex align-items-center'
					style={{ justifyContent: 'center' }}
				>
					<ul className=' list-unstyled list-inline'>
						<li className=' mx-3 list-inline-item'>
							<a
								target='_blank'
								href='https://github.com/AshutoshAgrawal2004'
								rel='noopener noreferrer'
							>
								<MDBIcon size='2x' fab icon='github' />
							</a>
						</li>
						<li className=' mx-3 list-inline-item'>
							<a
								target='_blank'
								href='https://www.linkedin.com/in/ashutosh-agrawal-537b70155/'
								rel='noopener noreferrer'
							>
								<MDBIcon size='2x' fab icon='linkedin' />
							</a>
						</li>
						<li className=' mx-3 list-inline-item'>
							<a
								target='_blank'
								href='https://www.hackerrank.com/agrawalnidhi635'
								rel='noopener noreferrer'
							>
								<MDBIcon size='2x' fab icon='hackerrank' />
							</a>
						</li>
						<li className=' mx-3 list-inline-item'>
							<a
								target='_blank'
								href='https://www.sololearn.com/Profile/10779261'
								rel='noopener noreferrer'
							>
								<img
									src={SLIcon}
									alt=''
									style={{
										height: '30px',
										marginBottom: '1rem',
									}}
									height='30px'
								/>
							</a>
						</li>
					</ul>
				</MDBRow>

				<div className='pb-4 text-center'>
					<h6 className='my-3 white-text '>
						If you wanna get in touch, talk to me about a project or just say hi
						send an email to <b>agrawalashutosh635@gmail.com</b> and ~let's talk
					</h6>
					<h6 className='my-3 white-text '>
						<MDBIcon icon='envelope' className='mr-1' />{' '}
						<a href='mailto:agrawalashutosh635@gmail.com'>
							agrawalashutosh635@gmail.com
						</a>
					</h6>
					<h6 className='my-3 white-text '>
						<MDBIcon icon='user-tie' className='mr-1' />{' '}
						<a
							href='https://www.freelancer.com/u/Ashu20040808'
							target='_blank'
							rel='noopener noreferrer'
						>
							<u>Freelancer</u>
						</a>
					</h6>
				</div>
			</MDBContainer>

			<div className='footer-copyright text-center py-5'>
				<MDBContainer fluid>
					<div className='my-3'>
						&copy; {new Date().getFullYear()} Copyright:{' '}
						<a href='/'>ashutoshagrawal2004</a>
					</div>
					Made with
					<MDBIcon icon='heart' className='topound mx-2' /> by{' '}
					<a
						href='https://github.com/ashutoshagrawal2004'
						target='_blank'
						rel='noopener noreferrer'
					>
						{' '}
						Ashutosh Agrawal
					</a>
				</MDBContainer>
			</div>
		</MDBFooter>
	);
};

export default Footer;
