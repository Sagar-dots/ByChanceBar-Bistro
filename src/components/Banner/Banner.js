import { useRef, useEffect } from 'react';
import Link from 'next/link';

// Import GSAP
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js';

// Import SASS file
import styles from './Banner.module.scss';

function Banner() {
	// Refs
	let section = useRef(null);

	gsap.registerPlugin(ScrollTrigger);
	let tl = gsap.timeline({ delay: 0.3 });

	// GSAP animation
	useEffect(() => {
		tl.from(section.children, {
			scrollTrigger: {
				trigger: section.children,
				start: 'top bottom',
				end: '+=100',
				scrub: 1,
			},
			y: 50,
			opacity: 0,
			duration: 2,
			stagger: 1,
		});
	}, [tl]);

	return (
		<div className={styles.banner} ref={(e) => (section = e)}>
			<h2>Come and Celebrate With Us!</h2>
			<p>
			"For an unforgettable experience crafted to your every desire, look no further than By Chance Bar & Bistro.
			</p>
			<Link href='/contact' passHref>
				<button className={styles.btnTan}>Book a Reservation</button>
			</Link>
		</div>
	);
}

export default Banner;
