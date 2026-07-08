"use client";
import * as React from "react";

import {
	motion,
	useScroll,
	useTransform,
} from "framer-motion";

interface iISmoothScrollHeroProps {
	/**
	 * Height of the scroll section in pixels
	 * @default 1500
	 */
	scrollHeight: number;
	/**
	 * Background image URL for desktop view
	 * @default "https://images.unsplash.com/photo-1511884642898-4c92249e20b6"
	 */
	desktopImage: string;
	/**
	 * Background image URL for mobile view
	 * @default "https://images.unsplash.com/photo-1511207538754-e8555f2bc187?q=80&w=2412&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
	 */
	mobileImage: string;
	/**
	 * Initial clip path percentage
	 * @default 25
	 */
	initialClipPercentage: number;
	/**
	 * Final clip path percentage
	 * @default 75
	 */
	finalClipPercentage: number;
}

interface iISmoothScrollHeroBackgroundProps
	extends Omit<iISmoothScrollHeroProps, 'scrollHeight'> {
	targetRef: React.RefObject<HTMLDivElement | null>;
}

const SmoothScrollHeroBackground: React.FC<
	iISmoothScrollHeroBackgroundProps
> = ({
	desktopImage,
	mobileImage,
	initialClipPercentage,
	finalClipPercentage,
	targetRef,
}) => {
	const {scrollYProgress} = useScroll({
		target: targetRef,
		offset: ["start start", "end end"],
	});

	const scale = useTransform(
		scrollYProgress,
		[0, 1],
		[1, 1.05],
	);

	return (
		<motion.div
			className="smooth-scroll-sticky"
			style={{
				scale,
				willChange: "transform",
			}}
		>
			{/* Mobile background */}
			<div
				className="smooth-scroll-bg smooth-scroll-bg-mobile"
				style={{
					backgroundImage: `url(${mobileImage})`,
				}}
			/>
			{/* Desktop background */}
			<div
				className="smooth-scroll-bg smooth-scroll-bg-desktop"
				style={{
					backgroundImage: `url(${desktopImage})`,
				}}
			/>
		</motion.div>
	);
};

/**
 * A smooth scroll hero component with parallax background effect
 * @param props - Component props
 * @returns React component
 */
 const SmoothScrollHero: React.FC<iISmoothScrollHeroProps> = ({
	scrollHeight = 1500,
	desktopImage = "https://images.unsplash.com/photo-1511884642898-4c92249e20b6",
	mobileImage = "https://images.unsplash.com/photo-1511207538754-e8555f2bc187?q=80&w=2412&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	initialClipPercentage = 25,
	finalClipPercentage = 75,
}) => {
	const targetRef = React.useRef<HTMLDivElement>(null);

	return (
		<div
			ref={targetRef}
			style={{height: `calc(${scrollHeight}px + 100vh)`}}
			className="smooth-scroll-section"
		>
			<SmoothScrollHeroBackground
				desktopImage={desktopImage}
				mobileImage={mobileImage}
				initialClipPercentage={initialClipPercentage}
				finalClipPercentage={finalClipPercentage}
				targetRef={targetRef}
			/>
		</div>
	);
};
export default SmoothScrollHero;
