import React from 'react';
import PropTypes from 'prop-types';
import Sketch from 'react-p5';

import BGL from '../images/Steve_landscape.jpg';
import BGP from '../images/Steve Portrait.jpg';
var img, gp5;
var window = { width: 1980, height: 1080 };
const Background = ({ isPortrait }) => {
	let particles = [];

	let initNoOfParticles = isPortrait ? 100 : 300;
	let brushSize = isPortrait ? 15 : 21;

	return (
		<Sketch
			preload={(p5) => {
				gp5 = p5;
				// img = p5.loadImage(Bg);
				img = isPortrait ? p5.loadImage(BGP) : p5.loadImage(BGL);
			}}
			setup={(p5, parent) => {
				console.log(p5);
				p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(parent);
				// mycan.parent('canvascontainer');
				p5.pixelDensity(1);
				// img = loadImage("Pikachu Jump.png");
				p5.background(0);
				p5.frameRate(30);
			}}
			draw={(p5) => {
				// requestAnimationFrame(p5.draw);
				// background(255);
				// image(img, 400, 200);
				if (brushSize > 3 && p5.frameCount % 50 == 0) {
					brushSize -= 3;
				}
				for (let i = 0; i < initNoOfParticles / brushSize; i++) {
					particles.push(
						new Particle(
							p5.random(p5.width),
							p5.random(p5.height),
							brushSize
						)
					);
				}
				if (p5.frameCount % 50 == 0) {
					particles.splice(0, particles.length);
				}
				for (var j = 0; j < particles.length; j++) {
					particles[j].show();
					particles[j].update();
				}
				if (p5.frameCount % 1000 == 0) {
					particles.splice(0, particles.length);
					p5.noLoop();
				}
				// image.loadPixels();
			}}
		/>
	);
};
class Particle {
	constructor(x, y, bs) {
		this.x = x;
		this.y = y;
		this.xvel = 10;
		this.yvel = 10;
		this.lastx = this.x;
		this.lasty = this.y;
		this.bs = bs;
	}
	update() {
		this.lastx = this.x;
		this.lasty = this.y;
		this.y += Math.floor(gp5.random(0, this.yvel));
		this.x += Math.floor(gp5.random(0, this.xvel));

		if (this.y > gp5.height || this.y < 0) {
			this.yvel *= -1;
		}
		if (this.x > gp5.width || this.x < 0) {
			this.xvel *= -1;
		}
		this.x = gp5.constrain(this.x, 0, gp5.width);
		this.y = gp5.constrain(this.y, 0, gp5.height);
	}
	show() {
		var px = gp5.map(this.x, 0, gp5.width, 0, img.width);
		var py = gp5.map(this.y, 0, gp5.height, 0, img.height);
		var col = img.get(px, py);
		gp5.noStroke();
		gp5.fill(col[0], col[1], col[2]);
		gp5.beginShape();
		for (let a = 0; a <= 360; a += 360 / gp5.floor(gp5.random(3, 6))) {
			let xx = this.bs * gp5.sin(a) + this.x;
			let yy = this.bs * gp5.cos(a) + this.y;
			gp5.vertex(xx, yy);
		}
		gp5.endShape(gp5.CLOSE);
		// gp5.ellipse(this.x, this.y, gp5.random(this.bs), gp5.random(this.bs));
	}
}

export default Background;
