import React from 'react';
import './App.css';

import Intro from './components/Intro/Intro';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
function App() {
	return (
		<>
			<Intro />
			<Skills />
			<Projects />
		</>
	);
}

export default App;
