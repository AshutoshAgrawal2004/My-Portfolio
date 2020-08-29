import React from 'react';
import PropTypes from 'prop-types';
import Sketch from 'react-p5';
import Bg from './bg.jpg';

const brushSize = 5;

var img;
var particles = [];
var window = { width: 1980, height: 1080 };
const Background = ({}) => {
	return (
		<Sketch
			preload={(p5) => {
				// img = p5.loadImage(Bg);
				img = p5.loadImage(
					'https://photos5.appleinsider.com/gallery/product_pages/189-hero.jpg'
				);
			}}
			setup={(p5, parent) => {
				console.log(p5);
				p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(parent);
				// mycan.parent('canvascontainer');
				p5.pixelDensity(1);
				// img = loadImage("Pikachu Jump.png");
				p5.background(51);
			}}
			draw={(p5) => {
				// requestAnimationFrame(p5.draw);
				// background(255);
				// image(img, 400, 200);
				for (let i = 0; i < 25; i++) {
					particles.push(
						new Particle(
							p5.random(p5.width),
							p5.random(p5.height),
							p5
						)
					);
				}
				if (p5.frameCount % 500 == 0) {
					particles.splice(0, particles.length);
				}
				for (var j = 0; j < particles.length; j++) {
					particles[j].show();
					particles[j].update();
				}
				// image.loadPixels();
			}}
		/>
	);
};
class Particle {
	constructor(x, y, p5) {
		this.x = x;
		this.y = y;
		this.xvel = 10;
		this.yvel = 10;
		this.lastx = this.x;
		this.lasty = this.y;
		this.p5 = p5;
	}
	update() {
		this.lastx = this.x;
		this.lasty = this.y;
		this.y += Math.floor(this.p5.random(0, this.yvel));
		this.x += Math.floor(this.p5.random(0, this.xvel));
		// this.y += Math.floor(this.p5.random(-10, 10));
		// this.x += brushSize;
		// if(this.x > this.p5.width) {
		//   this.y += brushSize;
		//   this.x = -this.x;
		// }
		if (this.y > this.p5.height || this.y < 0) {
			this.yvel *= -1;
		}
		if (this.x > this.p5.width || this.x < 0) {
			this.xvel *= -1;
		}
		this.x = this.p5.constrain(this.x, 0, this.p5.width);
		this.y = this.p5.constrain(this.y, 0, this.p5.height);
	}
	show() {
		// this.p5.noStroke();
		var px = this.p5.map(this.x, 0, this.p5.width, 0, img.width);
		var py = this.p5.map(this.y, 0, this.p5.height, 0, img.height);
		var col = img.get(px, py);
		// this.p5.strokeWeight(this.p5.random(brushSize));
		//this.p5.stroke(col[0], col[1], col[2]);
		this.p5.noStroke();
		//stroke(0);
		//this.p5.stroke(this.p5.random(255), this.p5.random(255), this.p5.random(255));
		//this.p5.strokeWeight(this.p5.random(3));
		this.p5.fill(col[0], col[1], col[2]);
		// line(this.x, this.y, this.lastx, this.lasty);
		this.p5.beginShape();
		for (
			let a = 0;
			a <= 360;
			a += 360 / this.p5.floor(this.p5.random(3, 6))
		) {
			let xx = brushSize * this.p5.sin(a) + this.x;
			let yy = brushSize * this.p5.cos(a) + this.y;
			this.p5.vertex(xx, yy);
		}
		this.p5.endShape(this.p5.CLOSE);
		// ellipse(this.x, this.y, this.p5.random(brushSize), this.p5.random(brushSize));
	}
}

export default Background;
/*
function preload() {
	// var selector = document.getElementById('chooseimg');
	// var imgsrc = $('#img');
	// selector.addEventListener('change', function() {
	//   imgsrc.attr('src', selector.value);
	//   console.log(selector.value);
	// });
	// img = loadImage(imgsrc.attr('src'));
	img = loadImage(
		'https://cors-anywhere.herokuapp.com/' + getImage(profileLink)
	);
}

function setup() {
	// var mycan = createCanvas(window.innerWidth, window.innerHeight);
	// canvas = document.getElementById("canvas");
	var mycan = createCanvas(img.width, img.height);
	mycan.parent('canvascontainer');
	pixelDensity(1);
	// img = loadImage("Pikachu Jump.png");
	background(255);
	particles = [];
}

function draw() {
	// background(255);
	// image(img, 400, 200);
	particles.push(new Particle(p5.random(width), p5.random(height)));
	if (frameCount % 1000 == 0) {
		particles.splice(0, particles.length);
	}
	for (var j = 0; j < particles.length; j++) {
		particles[j].show();
		particles[j].update();
	}
	// image.loadPixels();
}

*/
