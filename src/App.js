import React, { useEffect, useRef } from 'react';
import './App.scss';
import ReactGA from 'react-ga';
import History from './components/Routing/History';

import { MDBContainer } from 'mdbreact';

import Intro from './components/Intro/Intro';
import Projects from './components/Projects/Projects';
import ProjectDetail from './components/Projects/ProjectDetail';
import Skills from './components/Skills/Skills';
import Clients from './components/Clients/Clients';
import Footer from './components/layout/Footer';
import Navigation from './components/layout/Navigation';
import ScrollToTop from './components/Routing/ScrollToTop';

import { Router, Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function App() {
	useEffect(() => {
		if (document.location.hostname.search('localhost') !== 0) {
			ReactGA.initialize('UA-145155799-2');
			ReactGA.set({ page: History.location.pathname });
			ReactGA.pageview(History.location.pathname);
			History.listen((location) => {
				ReactGA.set({ page: location.pathname });
				ReactGA.pageview(location.pathname + location.search);
			});
		}
	}, []);

	const mainContainer = useRef();

	return (
		<>
			<Router history={History}>
				<Helmet
					titleTemplate='%s - Ashutosh Agrawal'
					defaultTitle='Ashutosh Agrawal'
				>
					<meta
						name='description'
						content='Welcome to my portfolio! I am the crazy one, full stack web developer, MERN Specialist & Creative Coder'
					/>
				</Helmet>
				<ScrollToTop scrollToComponent={mainContainer} />
				<Navigation />

				<Intro />
				<div className='routed' ref={mainContainer}>
					<Switch>
						{/* <Route exact path='/' component={Intro} /> */}
						<Route exact path='/clients' component={Clients} />

						<MDBContainer className='my-5' style={{ maxWidth: '900px' }}>
							<Route exact path='/' component={Projects} />
							<Route exact path='/projects' component={Projects} />
							<Route
								exact
								path='/projects/:index/:title'
								component={ProjectDetail}
							/>
							<Route exact path='/skills' component={Skills} />
						</MDBContainer>
					</Switch>
				</div>
				<Footer />
			</Router>
		</>
	);
}

export default App;
