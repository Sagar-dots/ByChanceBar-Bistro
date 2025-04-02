import { useRef, useEffect } from 'react';
import { gsap, Power4 } from 'gsap';

import styles from './PageBanner.module.scss';

function PageBanner() {
	// Ref
	let content = useRef(null);
	let tl = gsap.timeline();

	// GSAP animation
	useEffect(() => {
		// Text Animation
		tl.from(content, {
			y: 30,
			opacity: 0,
			duration: 1,
			ease: Power4.easeOut,
		});
	}, [tl]);

	return (
		<div className={styles.bannerContainer}>
			<h1 ref={(e) => (content = e)}>
				By Chance Bar and Bistro,Your home away from home.
			</h1>
		</div>
	);
}

export default PageBanner;
