import {AsynchronousAnimator} from "@kirinnee/animate";
import {AnimateX} from "../index";
import {AnimTrans} from "./AnimTrans";

class AnimX implements AnimateX {
	
	private readonly a: AsynchronousAnimator;
	
	constructor(asyncAnimator: AsynchronousAnimator) {
		this.a = asyncAnimator;
	}
	
	get IsExtended(): boolean {
		return true;
	}
	
	AssertExtend(): void {
		if (!this.IsExtended) throw new Error('AnimateX has to be extended');
	}
	
	ExtendPrimitives(): void {
		let a = this.a;
		['Wait', 'X', 'Y', 'W', 'H', 'ScaleX', 'ScaleY', 'SkewX', 'SkewY', 'Rotate', 'Opacity', 'BackgroundColor', 'FontColor', 'AnimateText', 'Blur', 'Invert', 'Sepia', 'Greyscale', 'Contrast', 'Brightness', 'Saturate', 'HueRotation'].Each(s => {
			(Element.prototype as any)[s] = function (...args: any[]) {
				return new AnimTrans(this, (a as any)[s].apply(a, [this].Add(args)), a);
			}
		});
	}
	
	
}

export {AnimX};