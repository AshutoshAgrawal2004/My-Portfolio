import React, { useEffect } from 'react';
import './App.css';
import ReactGA from 'react-ga';

import Intro from './components/Intro/Intro';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Clients from './components/Clients/Clients';
import Footer from './components/Footer';

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
			<Intro />
			<Skills />
			<Projects />
			<Clients />
			<Footer />
		</>
	);
}

export default App;
