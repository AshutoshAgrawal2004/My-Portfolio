import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from 'mdbreact';
import SLIcon from './images/sololearnIcon.svg';

const Footer = () => {
	return (
		<MDBFooter className='page-footer font-small pt-0 mt-5 footer main-footer'>
			<MDBContainer
				fluid
				className='text-center text-md-left social-footer'
			>
				<MDBRow
					className='pt-4 d-flex align-items-center'
					style={{ justifyContent: 'center' }}
				>
					<ul className='landing-page list-unstyled list-inline'>
						<li className='landing-page mx-3 list-inline-item'>
							<a
								target='_blank'
								href='https://github.com/AshutoshAgrawal2004'
							>
								<MDBIcon size='2x' fab icon='github' />
							</a>
						</li>
						<li className='landing-page mx-3 list-inline-item'>
							<a
								target='_blank'
								href='https://www.linkedin.com/in/ashutosh-agrawal-537b70155/'
							>
								<MDBIcon size='2x' fab icon='linkedin' />
							</a>
						</li>
						<li className='landing-page mx-3 list-inline-item'>
							<a
								target='_blank'
								href='https://www.hackerrank.com/agrawalnidhi635'
							>
								<MDBIcon size='2x' fab icon='hackerrank' />
							</a>
						</li>
						<li className='landing-page mx-3 list-inline-item'>
							<a
								target='_blank'
								href='https://www.sololearn.com/Profile/10779261'
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
				<MDBRow
					className='pb-4 d-flex align-items-center'
					style={{ justifyContent: 'center' }}
				>
					<h6 className='fontMont mb-0 mx-2  white-text landing-page'>
						<MDBIcon icon='envelope' className='mr-1' />{' '}
						agrawalashutosh635@gmail.com
					</h6>
				</MDBRow>
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
