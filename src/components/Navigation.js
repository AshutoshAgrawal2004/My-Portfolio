import React from 'react';
import { MDBNav, MDBNavItem, MDBNavLink } from 'mdbreact';

const Navigation = () => {
	return (
		<nav className='sticky-nav'>
			<MDBNav className='my-3 justify-content-center'>
				<MDBNavItem>
					<MDBNavLink to='/projects'>Projects</MDBNavLink>
				</MDBNavItem>
				<MDBNavItem>
					<MDBNavLink to='/clients'>Clients</MDBNavLink>
				</MDBNavItem>
				<MDBNavItem>
					<MDBNavLink to='/skills'>Skills</MDBNavLink>
				</MDBNavItem>
			</MDBNav>
		</nav>
	);
};

export default Navigation;
