import React, { useEffect } from 'react';
import './App.css';
import ReactGA from 'react-ga';

import { MDBContainer } from 'mdbreact';

import Intro from './components/Intro/Intro';
import Projects from './components/Projects/Projects';
import ProjectDetail from './components/Projects/ProjectDetail';
import Skills from './components/Skills/Skills';
import Clients from './components/Clients/Clients';
import Footer from './components/Footer';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	useEffect(() => {
		if (document.location.hostname.search('localhost') !== 0) {
			ReactGA.initialize('UA-145155799-2');
			ReactGA.set({ page: document.location.pathname });
			ReactGA.pageview(document.location.pathname);
		}
	}, []);

	return (
		<>
			<Router>
				<Switch>
					<Route exact path='/' component={Intro} />
					<Route path='/clients' component={Clients} />
					<MDBContainer className='my-5' style={{ maxWidth: '900px' }}>
						<Route path='/skills' component={Skills} />
						<Route
							exact
							path='/projects/:index/:title'
							component={ProjectDetail}
						/>
						<Route exact path='/projects' component={Projects} />
					</MDBContainer>
				</Switch>
				<Footer />
			</Router>
		</>
	);
}

export default App;
