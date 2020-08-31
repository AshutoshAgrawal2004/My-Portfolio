import React from 'react';
import './App.css';

import Intro from './components/Intro/Intro';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer';

function App() {
	return (
		<>
			<Intro />
			<Skills />
			<Projects />
			<Footer />
		</>
	);
}

export default App;
