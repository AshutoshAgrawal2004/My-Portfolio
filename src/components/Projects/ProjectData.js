import Maytree1 from '../images/projects/Maytree School/Maytree1.png';
import Maytree2 from '../images/projects/Maytree School/Maytree2.png';
import Maytree3 from '../images/projects/Maytree School/Maytree3.png';

import P1 from '../images/projects/MyPortfolio/P1.png';
import P2 from '../images/projects/MyPortfolio/P2.png';
import P3 from '../images/projects/MyPortfolio/P3.png';
import P4 from '../images/projects/MyPortfolio/P4.png';

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

import CP1 from '../images/projects/CollaborativePaint/CP1.png';
import CP2 from '../images/projects/CollaborativePaint/CP2.png';

import SnowFlake1 from '../images/projects/SnowFlakeMaker/SnowFlake1.png';
import SnowFlake2 from '../images/projects/SnowFlakeMaker/SnowFlake2.png';
import SnowFlake3 from '../images/projects/SnowFlakeMaker/SnowFlake3.png';

import Soccer1 from '../images/projects/Soccer/Soccer1.png';
import Soccer2 from '../images/projects/Soccer/Soccer2.png';
import Soccer3 from '../images/projects/Soccer/Soccer3.png';

import RT1 from '../images/projects/RemoteTeacher/RT1.png';
import RT2 from '../images/projects/RemoteTeacher/RT2.png';
import RT3 from '../images/projects/RemoteTeacher/RT3.png';
import RT4 from '../images/projects/RemoteTeacher/RT4.png';
import RT5 from '../images/projects/RemoteTeacher/RT5.png';

import AT1 from '../images/projects/AppuTv/AT1.png';
import AT2 from '../images/projects/AppuTv/AT2.png';
import AT3 from '../images/projects/AppuTv/AT3.png';

import BGR1 from '../images/projects/BackgroundRemover/BGR1.png';
import BGR2 from '../images/projects/BackgroundRemover/BGR2.png';

import PS1 from '../images/projects/Proshop/PS1.png';
import PS2 from '../images/projects/Proshop/PS2.png';
import PS3 from '../images/projects/Proshop/PS3.png';
import PS4 from '../images/projects/Proshop/PS4.png';

import MF1 from '../images/projects/MovieFinder/MF1.png';

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
	Php,
	MySQL,
	Netlify,
	ExpressJS,
	NodeJS,
	ReactJS,
	Redux,
	Heroku,
	JWT,
	OAuth,
	SocketIO,
	Git,
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
	TypeScript,
	Sass,
	Stripe,
	AWS,
	ReactNative,
	AndroidStudio,
} = SkillData;

const ProjectData = [
	{
		title: 'RemoteTeacher.io',
		images: [RT1, RT2, RT3, RT4, RT5],
		about:
			'Remoteteacher.io is an online marketplace where teachers and students connect for one-on-one online lessons.\nIf you are a student, find the perfect teacher for you and take lessons at any time that is convenient for you.\nIf you are a teacher with specialized knowledge in a subject that you would like to share make sure to register!',
		liveLink: 'https://remoteteacher.io',
		skills: {
			Html,
			CSS,
			JS,
			Bootstrap,
			Sass,
			ReactJS,
			NodeJS,
			ExpressJS,
			MySQL,
			JWT,
			OAuth,
			Git,
			AWS,
			Stripe,
			GoogleAnalytics,
		},
	},
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
		title: 'Proshop - Ecommerce',
		images: [PS1, PS2, PS3, PS4],
		about:
			'An Ecommerce platform built with the MERN Stack. This is the course project from Brad Traversy MERN Stack Course.',
		liveLink: 'https://proshop-store.herokuapp.com/',
		source: 'https://github.com/bradtraversy/proshop_mern',
		skills: {
			Html,
			CSS,
			JS,
			Bootstrap,
			ReactJS,
			Redux,
			NodeJS,
			ExpressJS,
			MongoDB,
			JWT,
			Git,
			Heroku,
		},
	},

	{
		title: 'Airaser - Background Remover',
		images: [BGR2, BGR1],
		about:
			'An app for removing backgrounds from an image perfectly using AI and Machine Learning. The AI and Backend is made by Alankar Shukla (https://github.com/alan-ai-learner)',
		liveLink: 'https://airaser.com/',
		source: 'https://github.com/alan-ai-learner',
		skills: { Html, CSS, JS, Materialize, JQuery, Python },
	},
	{
		title: 'Appu Tv',
		images: [AT1, AT2, AT3],
		about: 'A video streaming platform for kids, prototyped using youtube API',
		liveLink: 'https://apputv.netlify.app',
		skills: { Html, CSS, JS, ReactJS, MDBR, Netlify },
	},
	{
		title: 'My Portfolio',
		images: [P1, P2, P3, P4],
		about: 'My Portfolio Website',
		liveLink: 'https://ashutosh-agrawal.netlify.app',
		source: 'https://github.com/AshutoshAgrawal2004/My-Portfolio',
		skills: { Html, CSS, JS, ReactJS, MDBR, p5JS, Netlify },
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
		},
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
		},
	},
	{
		title: 'Collaborative Paint',
		images: [CP1, CP2],
		about:
			'Made using socket.io this will allow multiple clients to connect to server and paint together on the same canvas',
		liveLink: 'https://collaborate-on-a-paint.herokuapp.com/',
		source: 'https://github.com/AshutoshAgrawal2004/Collaborative-Painting',
		skills: { Html, CSS, JS, p5JS, JQuery, NodeJS, ExpressJS, SocketIO },
	},
	{
		title: 'Movie Finder',
		images: [MF1],
		about:
			'Using IMDB API, get information about all your favourite movies, shows, series quickly.',
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
		},
	},
];

export default ProjectData;
