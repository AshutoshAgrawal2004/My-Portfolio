import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Intro from './components/Intro';
import Projects from './components/Projects';
import Skills from './components/Skills';
function App() {
	return (
		<>
			<Intro />
			<Skills />
			<Projects />
		</>
		// <Router>
		// 	<Switch>
		// 		<Route exact path='/' component={Intro} />
		// 	</Switch>
		// </Router>
	);
}

export default App;
