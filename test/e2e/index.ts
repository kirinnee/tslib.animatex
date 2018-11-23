import {Core, Kore} from "@kirinnee/core";
import {DOMEx, DOMExtend} from "@kirinnee/domex";
import {EleFact, ElementFactory} from "@kirinnee/elefact";
import * as gsap from 'gsap';
import {TweenLite} from 'gsap';
import {EaseFactory, kEaseFactory} from "@kirinnee/kease";
import {
	AnimationData, AsynchronousAnimator, GSAPAsyncAnimator, GSAPSyncAnimator, SynchronousAnimator
} from "@kirinnee/animate";
import {AnimateX} from "../../src";
import {AnimX} from "../../src/classLibrary/AnimX";

let text = require('gsap/TextPlugin');

let core: Core = new Kore();
core.ExtendPrimitives();

let domex: DOMEx = new DOMExtend(core);
domex.ExtendPrimitives();

let eases: EaseFactory = new kEaseFactory(gsap);
let eleFact: ElementFactory = new EleFact(domex, "k-space");

//Construct Synchronous animator
let animator: SynchronousAnimator = new GSAPSyncAnimator(TweenLite, text, eases, eleFact, domex, core);

//Construct Asynchronous animator
let asyncAnimator: AsynchronousAnimator = new GSAPAsyncAnimator(animator);

let animX: AnimateX = new AnimX(asyncAnimator);
animX.ExtendPrimitives();

let $ = (q: string): Element => document.getElementById(q)!;
let src: string = "https://s3-ap-southeast-1.amazonaws.com/kirin.static.host/test/book.png";
let normalBox = eleFact.IMG(src, {id: "normal-box"})
	.Style('position', 'relative')
	.Style("width", "40vw")
	.Style("height", "16vw")
	.Style("float", "left");

$("test-target").Append(normalBox);

$("start").Click(async () => {
	let e: Element = $("normal-box");
	
	let data: AnimationData = {duration: 300};
	e
		.X(0, 100, data)
		.Y(0, 100, data)
		.W('40vw', '20vw', data)
		.H('16vw', '12vw', data)
		.Contrast(1, 2, data)
		.Contrast(2, 1, data)
		.Brightness(1, 2, data)
		.Brightness(2, 1, data)
		.Blur(0, 1, data)
		.Blur(1, 0, data)
		.Sepia(0, 1, data)
		.Sepia(1, 0, data)
		.Greyscale(0, 1, data)
		.Greyscale(1, 0, data)
		.Contrast(1, 2, data)
		.Contrast(2, 1, data)
		.Invert(0, 1, data)
		.Invert(1, 0, data)
		.HueRotation(0, 360, data)
		.Saturate(1, 2, data)
		.Saturate(2, 1, data)
		.ScaleX(1, 2, data)
		.ScaleY(1, 2, data)
		.Rotate(0, 360, data)
		.Opacity(1, 0, data)
		.Opacity(0, 1, data)
		.ScaleY(2, 1, data)
		.ScaleX(2, 1, data)
		.X(100, 0, data)
		.Y(100, 0, data)
		.W("20vw", "40vw", data)
		.H("12vw", "16vw", data);
	
	
	// let data:AnimationData = {duration: 1000, callback: ()=> console.log('done')};
	//
	// let prom: Promise<Element> = asyncAnimator.Blur(e,0,10, data);
	// console.log(prom);
	// let chainer: AnimationTransition = new AnimTrans(e,prom, asyncAnimator);
	//  chainer
	// 	.Blur(10,0,data)
	// 	.Blur(0,10, data)
	// 	 .Blur(10,0,data)
	// 	 .Blur(0,10, data)
	// 	 .Blur(10,0, data);
	// // 	.Brightness(2,1,{duration:1000})
	// 	.Contrast(1,2, {duration:1000})
	// 	.Contrast(2,1, {duration:1000});
	
});


