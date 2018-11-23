import {AnimationTransition} from "../index";
import {AnimationData, AsynchronousAnimator, TextAnimation} from "@kirinnee/animate";

class AnimTrans implements AnimationTransition {
	
	private readonly ele: Element;
	private readonly prom: Promise<Element>;
	private readonly animator: AsynchronousAnimator;
	
	constructor(e: Element, promise: Promise<Element>, animator: AsynchronousAnimator) {
		this.ele = e;
		this.prom = promise;
		this.animator = animator;
	}
	
	get Element(): Element {
		return this.ele;
	}
	
	get Promise(): Promise<Element> {
		return this.prom;
	}
	
	AnimateText(text: string, data?: TextAnimation): AnimationTransition {
		return this.w('AnimateText', [text], data);
	}
	
	BackgroundColor(ori: string, to: string, data?: AnimationData): AnimationTransition {
		return this.w('BackgroundColor', [ori, to], data);
	}
	
	Blur(ori: number, to: number, data?: AnimationData): AnimationTransition {
		return this.w('Blur', [ori, to], data);
	}
	
	Brightness(ori: number, to: number, data?: AnimationData): AnimationTransition {
		return this.w('Brightness', [ori, to], data);
	}
	
	Contrast(ori: number, to: number, data?: AnimationData): AnimationTransition {
		return this.w('Contrast', [ori, to], data);
	}
	
	FontColor(ori: string, to: String, data?: AnimationData): AnimationTransition {
		return this.w('FontColor', [ori, to], data);
	}
	
	Greyscale(ori: number, to: number, data?: AnimationData): AnimationTransition {
		return this.w('Greyscale', [ori, to], data);
	}
	
	H(ori: string | number, to: string | number, data?: AnimationData): AnimationTransition {
		return this.w('H', [ori, to], data);
	}
	
	HueRotation(ori: number, to: number, data?: AnimationData): AnimationTransition {
		return this.w('HueRotation', [ori, to], data);
	}
	
	Invert(ori: number, to: number, data?: AnimationData): AnimationTransition {
		return this.w('Invert', [ori, to], data);
	}
	
	Opacity(ori: number, to: number, data?: AnimationData): AnimationTransition {
		return this.w('Opacity', [ori, to], data);
	}
	
	Rotate(ori: number, to: number, data?: AnimationData): AnimationTransition {
		return this.w('Rotate', [ori, to], data);
	}
	
	Saturate(ori: number, to: number, data?: AnimationData): AnimationTransition {
		return this.w('Saturate', [ori, to], data);
	}
	
	ScaleX(ori: number, to: number, data?: AnimationData): AnimationTransition {
		return this.w('ScaleX', [ori, to], data);
	}
	
	ScaleY(ori: number, to: number, data?: AnimationData): AnimationTransition {
		return this.w('ScaleY', [ori, to], data);
	}
	
	Sepia(ori: number, to: number, data?: AnimationData): AnimationTransition {
		return this.w('Sepia', [ori, to], data);
	}
	
	SkewX(ori: number, to: number, data?: AnimationData): AnimationTransition {
		return this.w('SkewX', [ori, to], data);
	}
	
	SkewY(ori: number, to: number, data?: AnimationData): AnimationTransition {
		return this.w('SkewY', [ori, to], data);
	}
	
	W(ori: string | number, to: string | number, data?: AnimationData): AnimationTransition {
		return this.w('W', [ori, to], data);
	}
	
	Wait(data?: AnimationData): AnimationTransition {
		return this.w('Wait', [], data);
	}
	
	X(ori: string | number, to: string | number, data?: AnimationData): AnimationTransition {
		return this.w('X', [ori, to], data);
	}
	
	Y(ori: string | number, to: string | number, data?: AnimationData): AnimationTransition {
		return this.w('Y', [ori, to], data);
	}
	
	private w(type: string, args: any[], data?: TextAnimation): AnimationTransition {
		let k = this;
		let promise: Promise<Element> = new Promise<Element>(async (resolve: (e: Element) => void) => {
			let ele: Element = await this.prom;
			let e: Element = await (k.animator as any)[type].apply(k.animator, [ele].Add(args).Add(data as any));
			resolve(e);
		});
		return new AnimTrans(this.ele, promise, this.animator);
	}
}

export {AnimTrans};