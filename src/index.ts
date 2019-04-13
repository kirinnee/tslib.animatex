import {AnimationData, TextAnimation} from "@kirinnee/animate";
import {AnimX} from "./classLibrary/AnimX";

declare global {
	interface Element {
		Wait(data?: AnimationData): AnimationTransition
		
		X(ori: string | number, to: string | number, data?: AnimationData): AnimationTransition;
		
		Y(ori: string | number, to: string | number, data?: AnimationData): AnimationTransition;
		
		W(ori: string | number, to: string | number, data?: AnimationData): AnimationTransition;
		
		H(ori: string | number, to: string | number, data?: AnimationData): AnimationTransition;
		
		ScaleX(ori: number, to: number, data?: AnimationData): AnimationTransition;
		
		ScaleY(ori: number, to: number, data?: AnimationData): AnimationTransition;
		
		SkewX(ori: number, to: number, data?: AnimationData): AnimationTransition;
		
		SkewY(ori: number, to: number, data?: AnimationData): AnimationTransition;
		
		Rotate(ori: number, to: number, data?: AnimationData): AnimationTransition;
		
		Opacity(ori: number, to: number, data?: AnimationData): AnimationTransition;
		
		BackgroundColor(ori: string, to: string, data?: AnimationData): AnimationTransition;
		
		FontColor(ori: string, to: String, data?: AnimationData): AnimationTransition;
		
		AnimateText(text: string, data?: TextAnimation): AnimationTransition;
		
		Blur(ori: number, to: number, data?: AnimationData): AnimationTransition;
		
		Invert(ori: number, to: number, data?: AnimationData): AnimationTransition;
		
		Sepia(ori: number, to: number, data?: AnimationData): AnimationTransition;
		
		Greyscale(ori: number, to: number, data?: AnimationData): AnimationTransition;
		
		Contrast(ori: number, to: number, data?: AnimationData): AnimationTransition;
		
		Brightness(ori: number, to: number, data?: AnimationData): AnimationTransition;
		
		Saturate(ori: number, to: number, data?: AnimationData): AnimationTransition;
		
		HueRotation(ori: number, to: number, data?: AnimationData): AnimationTransition;
	}
	
	interface SVGElement extends Element {
	}
	
	interface HTMLElement extends Element {
	}
	
	interface HTMLAnchorElement extends HTMLElement {
	}
	
	interface HTMLAppletElement extends HTMLElement {
	}
	
	interface HTMLAreaElement extends HTMLElement {
	}
	
	interface HTMLAudioElement extends HTMLElement {
	}
	
	interface HTMLBRElement extends HTMLElement {
	}
	
	interface HTMLBaseElement extends HTMLElement {
	}
	
	interface HTMLBaseFontElement extends HTMLElement {
	}
	
	interface HTMLBodyElement extends HTMLElement {
	}
	
	interface HTMLButtonElement extends HTMLElement {
	}
	
	interface HTMLCanvasElement extends HTMLElement {
	}
	
	interface HTMLDListElement extends HTMLElement {
	}
	
	interface HTMLDataListElement extends HTMLElement {
	}
	
	interface HTMLDataElement extends HTMLElement {
	}
	
	interface HTMLDetailsElement extends HTMLElement {
	}
	
	interface HTMLDialogElement extends HTMLElement {
	}
	
	interface HTMLDirecoryElement extends HTMLElement {
	}
	
	interface HTMLEmbedElement extends HTMLElement {
	}
	
	interface HTMLFieldSetElement extends HTMLElement {
	}
	
	interface HTMLFontElement extends HTMLElement {
	}
	
	interface HTMLFormElement extends HTMLElement {
	}
	
	interface HTMLDivElement extends HTMLElement {
	}
	
	interface HTMLFrameElement extends HTMLElement {
	}
	
	interface HTMLFrameSetElement extends HTMLElement {
	}
	
	interface HTMLHRElement extends HTMLElement {
	}
	
	interface HTMLHeadElement extends HTMLElement {
	}
	
	interface HTMLHeadingElement extends HTMLElement {
	}
	
	interface HTMLHtmlElement extends HTMLElement {
	}
	
	interface HTMLImageElement extends HTMLElement {
	}
	
	interface HTMLIFrameElement extends HTMLElement {
	}
	
	interface HTMLInputElement extends HTMLElement {
	}
	
	interface HTMLLIElement extends HTMLElement {
	}
	
	interface HTMLLabelElement extends HTMLElement {
	}
	
	interface HTMLLegendElement extends HTMLElement {
	}
	
	interface HTMLLinkElement extends HTMLElement {
	}
	
	interface HTMLVideoElement extends HTMLElement {
	}
	
	interface HTMLUnknownElement extends HTMLElement {
	}
	
	interface HTMLMainElement extends HTMLElement {
	}
	
	interface HTMLMapElement extends HTMLElement {
	}
	
	interface HTMLMarqueeElement extends HTMLElement {
	}
	
	interface HTMLMediaElement extends HTMLElement {
	}
	
	interface HTMLMenuElement extends HTMLElement {
	}
	
	interface HTMLMetaElement extends HTMLElement {
	}
	
	interface HTMLMeterElement extends HTMLElement {
	}
	
	interface HTMLModElement extends HTMLElement {
	}
	
	interface HTMLOListElement extends HTMLElement {
	}
	
	interface HTMLObjectElement extends HTMLElement {
	}
	
	interface HTMLOptGroupElement extends HTMLElement {
	}
	
	interface HTMLOptionElement extends HTMLElement {
	}
	
	interface HTMLPreElement extends HTMLElement {
	}
	
	interface HTMLPictureElement extends HTMLElement {
	}
	
	interface HTMLOutputElement extends HTMLElement {
	}
	
	interface HTMLParagraphElement extends HTMLElement {
	}
	
	interface HTMLParamElement extends HTMLElement {
	}
	
	interface HTMLProgressElement extends HTMLElement {
	}
	
	interface HTMLScriptElement extends HTMLElement {
	}
	
	interface HTMLQuoteElement extends HTMLElement {
	}
	
	interface HTMLSelectElement extends HTMLElement {
	}
	
	interface HTMLSlotElement extends HTMLElement {
	}
	
	interface HTMLSourceElement extends HTMLElement {
	}
	
	interface HTMLSpanElement extends HTMLElement {
	}
	
	interface HTMLStyleElement extends HTMLElement {
	}
	
	interface HTMLTableCaptionElement extends HTMLElement {
	}
	
	interface HTMLTableCellElement extends HTMLElement {
	}
	
	interface HTMLTableDataCellElement extends HTMLElement {
	}
	
	interface HTMLTableColElement extends HTMLElement {
	}
	
	interface HTMLTableElement extends HTMLElement {
	}
	
	interface HTMLTableHeaderElement extends HTMLElement {
	}
	
	interface HTMLTableRowElement extends HTMLElement {
	}
	
	interface HTMLTableSectionElement extends HTMLElement {
	}
	
	interface HTMLTitleElement extends HTMLElement {
	}
	
	interface HTMLTextAreaElement extends HTMLElement {
	}
	
	interface HTMLTemplateElement extends HTMLElement {
	}
	
	interface HTMLTimeElement extends HTMLElement {
	}
	
	interface HTMLTrackElement extends HTMLElement {
	}
	
	interface HTMLUListElement extends HTMLElement {
	}
}

interface AnimationTransition {
	Promise: Promise<Element>;
	Element: Element;
	
	Wait(data?: AnimationData): AnimationTransition
	
	X(ori: string | number, to: string | number, data?: AnimationData): AnimationTransition;
	
	Y(ori: string | number, to: string | number, data?: AnimationData): AnimationTransition;
	
	W(ori: string | number, to: string | number, data?: AnimationData): AnimationTransition;
	
	H(ori: string | number, to: string | number, data?: AnimationData): AnimationTransition;
	
	ScaleX(ori: number, to: number, data?: AnimationData): AnimationTransition;
	
	ScaleY(ori: number, to: number, data?: AnimationData): AnimationTransition;
	
	SkewX(ori: number, to: number, data?: AnimationData): AnimationTransition;
	
	SkewY(ori: number, to: number, data?: AnimationData): AnimationTransition;
	
	Rotate(ori: number, to: number, data?: AnimationData): AnimationTransition;
	
	Opacity(ori: number, to: number, data?: AnimationData): AnimationTransition;
	
	BackgroundColor(ori: string, to: string, data?: AnimationData): AnimationTransition;
	
	FontColor(ori: string, to: String, data?: AnimationData): AnimationTransition;
	
	AnimateText(text: string, data?: TextAnimation): AnimationTransition;
	
	Blur(ori: number, to: number, data?: AnimationData): AnimationTransition;
	
	Invert(ori: number, to: number, data?: AnimationData): AnimationTransition;
	
	Sepia(ori: number, to: number, data?: AnimationData): AnimationTransition;
	
	Greyscale(ori: number, to: number, data?: AnimationData): AnimationTransition;
	
	Contrast(ori: number, to: number, data?: AnimationData): AnimationTransition;
	
	Brightness(ori: number, to: number, data?: AnimationData): AnimationTransition;
	
	Saturate(ori: number, to: number, data?: AnimationData): AnimationTransition;
	
	HueRotation(ori: number, to: number, data?: AnimationData): AnimationTransition;
}

interface AnimateX {
	IsExtended: boolean;
	
	ExtendPrimitives(): void;
	
	AssertExtend(): void;
}

export {AnimationTransition, AnimateX, AnimX};
