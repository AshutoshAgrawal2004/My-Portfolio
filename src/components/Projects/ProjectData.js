import Maytree1 from '../images/projects/Maytree School/Maytree1.png';
import Maytree2 from '../images/projects/Maytree School/Maytree2.png';
import Maytree3 from '../images/projects/Maytree School/Maytree3.png';

import Applicant1 from '../images/projects/Applicant Management System/Applicant1.png';
import Applicant2 from '../images/projects/Applicant Management System/Applicant2.png';

import Blog1 from '../images/projects/Blog/Blog1.png';
import Blog2 from '../images/projects/Blog/Blog2.png';
import Blog3 from '../images/projects/Blog/Blog3.png';
import Blog4 from '../images/projects/Blog/Blog4.png';

import ELearning1 from '../images/projects/E-Learning Platform/ELearning1.png';
import ELearning2 from '../images/projects/E-Learning Platform/ELearning2.png';
import ELearning3 from '../images/projects/E-Learning Platform/ELearning3.png';
import ELearning4 from '../images/projects/E-Learning Platform/ELearning4.png';
import ELearning5 from '../images/projects/E-Learning Platform/ELearning5.png';

import Workshop1 from '../images/projects/Workshop Management System/Workshop1.png';
import Workshop2 from '../images/projects/Workshop Management System/Workshop2.png';
import Workshop3 from '../images/projects/Workshop Management System/Workshop3.png';

import PeriodicTable1 from '../images/projects/PeriodicTable/PeriodicTable1.png';
import PeriodicTable2 from '../images/projects/PeriodicTable/PeriodicTable2.png';

import Pokedex1 from '../images/projects/Pokedex/Pokedex1.png';
import Pokedex2 from '../images/projects/Pokedex/Pokedex2.png';
import Pokedex3 from '../images/projects/Pokedex/Pokedex3.png';

import BaseApparel1 from '../images/projects/Live Css/BaseApparel1.png';
import CSSForm1 from '../images/projects/Live Css/CSSForm1.png';
import ProjectTracking1 from '../images/projects/Live Css/ProjectTracking1.png';
import SingleGrid1 from '../images/projects/Live Css/SingleGrid1.png';

import CP1 from '../images/projects/CollaborativePaint/CP1.png';
import CP2 from '../images/projects/CollaborativePaint/CP2.png';
import CP3 from '../images/projects/CollaborativePaint/CP3.png';

import Maths1 from '../images/projects/MathsQuiz/Maths1.png';
import Maths2 from '../images/projects/MathsQuiz/Maths2.png';
import Maths3 from '../images/projects/MathsQuiz/Maths3.png';

import SnowFlake1 from '../images/projects/SnowFlakeMaker/SnowFlake1.png';
import SnowFlake2 from '../images/projects/SnowFlakeMaker/SnowFlake2.png';
import SnowFlake3 from '../images/projects/SnowFlakeMaker/SnowFlake3.png';

import Soccer1 from '../images/projects/Soccer/Soccer1.png';
import Soccer2 from '../images/projects/Soccer/Soccer2.png';
import Soccer3 from '../images/projects/Soccer/Soccer3.png';

import SkillData from '../Skills/SkillData';

const {
	Html,
	CSS,
	JS,
	JQuery,
	p5JS,
	Bootstrap,
	Materialize,
	MDBR,
	MongoDB,
	ExpressJS,
	NodeJS,
	ReactJS,
	Redux,
	Heroku,
	JWT,
	OAuth,
	SocketIO,
	Git,
	Regex,
	Python,
	C,
	Cpp,
	GoogleAnalytics,
	FacebookAds,
	Firebase,
	Chrome,
	VSCode,
	Postman,
	AdobePS,
	Canva,
} = SkillData;

const ProjectData = [
	{
		title: 'MaytreeSchool.com',
		images: [Maytree1, Maytree2, Maytree3],
		about: 'Website Developed for Maytree School Of Entrepreneurship',
		liveLink: 'https://www.maytreeschool.com',
		skills: {
			Html,
			CSS,
			JS,
			MDBR,
			ReactJS,
			Redux,
			NodeJS,
			ExpressJS,
			MongoDB,
			Regex,
			JWT,
			OAuth,
			Git,
			Heroku,
			GoogleAnalytics,
			FacebookAds,
		},
	},
	{
		title: 'Periodic Table',
		images: [PeriodicTable1, PeriodicTable2],
		about:
			'Information about all the elements in a beautiful UI made with React and Materialize using Chemistry API',
		liveLink: 'https://ashutoshagrawal2004.github.io/Elements',
		source: 'https://github.com/AshutoshAgrawal2004/Elements',
		skills: { Html, CSS, JS, ReactJS, Redux, Materialize },
	},
	{
		title: 'Live CSS: Project Tracking Intro UI Design',
		images: [ProjectTracking1],
		about:
			'A Design Challenge by Frontend Mentor completed with a creative touch of live CSS',
		liveLink:
			'https://ashutoshagrawal2004.github.io/Project-Tracking-Intro-UI-Design-Live-CSS/',
		source:
			'https://github.com/AshutoshAgrawal2004/Project-Tracking-Intro-UI-Design-Live-CSS',
		skills: { Html, CSS, JS },
	},
	{
		title: 'E-Learning Platform',
		images: [ELearning1, ELearning2, ELearning3, ELearning4, ELearning5],
		about:
			'E-Learning Platform for students to easily attend their lectures and client to manage them. The client can easily create courses with lessons. Students can easily attend the lectures, ask doubts, and receive notices regarding their classes.',
		skills: {
			Html,
			CSS,
			JS,
			MDBR,
			ReactJS,
			Redux,
			NodeJS,
			ExpressJS,
			MongoDB,
			Regex,
		},
	},
	{
		title: 'Soccer Game',
		images: [Soccer1, Soccer2, Soccer3],
		about: 'A 2D Soccer Game with 3 difficulty levels. Have Fun!',
		liveLink: 'https://ashutoshagrawal2004.github.io/Soccer-Game/',
		source: 'https://github.com/AshutoshAgrawal2004/Soccer-Game',
		skills: { Html, CSS, JS, p5JS },
	},

	{
		title: 'Pokedex',
		images: [Pokedex1, Pokedex2, Pokedex3],
		about: 'A Pokedex made with ReactJS and PokeAPI',
		liveLink: 'https://ashutoshagrawal2004.github.io/Pokedex',
		source: 'https://github.com/AshutoshAgrawal2004/Pokedex',
		skills: { Html, CSS, JS, ReactJS, Redux, Bootstrap },
	},
	{
		title: 'Blog',
		images: [Blog1, Blog2, Blog3, Blog4],
		about:
			'A complete multi-user blogging platform with posts, likes, comments, reports, followers, profiles, and much more.',
		liveLink: 'https://www.maytreeschool.com/blog',
		skills: {
			Html,
			CSS,
			JS,
			MDBR,
			ReactJS,
			Redux,
			NodeJS,
			ExpressJS,
			MongoDB,
			Regex,
		},
	},
	{
		title: 'Snow Flake Maker',
		images: [SnowFlake1, SnowFlake2, SnowFlake3],
		about: 'The Happy Holiday Code! Make and Share Snow Flakes',
		liveLink: 'https://ashutoshagrawal2004.github.io/Snow-Flake-Maker/',
		source: 'https://github.com/AshutoshAgrawal2004/Snow-Flake-Maker',
		skills: { Html, CSS, JS, p5JS, JQuery, Firebase },
	},

	{
		title: 'Collaborative Paint',
		images: [CP1, CP2, CP3],
		about:
			'Made using socket.io this will allow multiple clients to connect to server and paint together on the same canvas',
		liveLink: 'https://collaborate-on-a-paint.herokuapp.com/',
		source: 'https://github.com/AshutoshAgrawal2004/Collaborative-Painting',
		skills: { Html, CSS, JS, p5JS, JQuery, SocketIO },
	},
	{
		title: 'Application Management System',
		images: [Applicant1, Applicant2],
		about:
			'An Application Management System with easy to use UI and all the features required by the client to productively manage applicants ( leads ).',
		skills: {
			Html,
			CSS,
			JS,
			MDBR,
			ReactJS,
			Redux,
			NodeJS,
			ExpressJS,
			MongoDB,
			Regex,
		},
	},
	{
		title: 'Maths Quiz: Square & Cube Practise',
		images: [Maths1, Maths2, Maths3],
		about: 'A Maths Quiz for practising Square & Cubes of numbers',
		liveLink: 'https://ashutoshagrawal2004.github.io/Square-Cube-Quiz/',
		source: 'https://github.com/AshutoshAgrawal2004/Square-Cube-Quiz',
		skills: { Html, CSS, JS },
	},

	{
		title: 'Live CSS: Sign Up Form',
		images: [CSSForm1],
		about:
			'A Design Challenge by Frontend Mentor completed with a creative touch of live CSS',
		liveLink:
			'https://ashutoshagrawal2004.github.io/Real-Time-CSS-Sign-Up-Form/index.html',
		source:
			'https://github.com/AshutoshAgrawal2004/Real-Time-CSS-Sign-Up-Form',
		skills: { Html, CSS, JS },
	},
	{
		title: 'Workshop Organiser',
		images: [Workshop1, Workshop2, Workshop3],
		about:
			'Workshop Organiser allowing the client to host workshops easily and people to apply and join workshops easily.',
		liveLink: 'https://www.maytreeschool.com/workshops',
		skills: {
			Html,
			CSS,
			JS,
			MDBR,
			ReactJS,
			Redux,
			NodeJS,
			ExpressJS,
			MongoDB,
			Regex,
		},
	},

	// {
	// 	title: 'Live CSS: Base Apparel Website Design',
	// 	images: [BaseApparel1],
	// 	about:
	// 		'A Design Challenge by Frontend Mentor completed with a creative touch of live CSS',
	// 	liveLink:
	// 		'https://ashutoshagrawal2004.github.io/Base-Apparel-Coming-Soon-UI-Live-CSS/',
	// 	source:
	// 		'https://github.com/AshutoshAgrawal2004/Base-Apparel-Coming-Soon-UI-Live-CSS',
	// 	skills: { Html, CSS, JS },
	// },
	{
		title: 'Live CSS: Single Price Grid UI',
		images: [SingleGrid1],
		about:
			'A Design Challenge by Frontend Mentor completed with a creative touch of live CSS',
		liveLink:
			'https://ashutoshagrawal2004.github.io/Single-Price-Grid-UI-Live-CSS/',
		source:
			'https://github.com/AshutoshAgrawal2004/Single-Price-Grid-UI-Live-CSS',
		skills: { Html, CSS, JS },
	},
];

export default ProjectData;
