import { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Import GSAP
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js';

// Import SASS file
import styles from './Story.module.scss';

function Story() {
	// Refs
	let section = useRef(null);

	gsap.registerPlugin(ScrollTrigger);
	let tl = gsap.timeline({ delay: 0.3 });

	// GSAP animation
	useEffect(() => {
		// Section Animation
		tl.from(
			section.children,
			{
				scrollTrigger: {
					trigger: section.children,
					start: 'top 80%',
					end: '+=500', // end after scrolling 500px beyond the start
					scrub: 1,
				},
				y: 100,
				opacity: 0,
				duration: 1.5,
				stagger: 0.5,
			},
			0.2
		);
	}, [tl]);

	return (
		<section className={styles.container} ref={(e) => (section = e)}>
			<h2 className={styles.mainHeader}>
			Think uncomplicated but surprising Australian flavors, dished up without pretence. Share plates meant for passing, cold beers poured with a grin, and a vibe that says ‘stay awhile.’
			No fuss. No frills. Just damn good food—and maybe a round of pool or karaoke while you’re at it."
			</h2>
			<hr className={styles.divider} />
			<div className={styles.medContainer}>
				<Image
					src='/story.jpg'
					width={900}
					height={800}
					objectFit='contain'
					alt='Our Story Image'
					priority
					placeholder='blur'
					blurDataURL='/blur/story.jpg'
					className={styles.storyImg}
				/>

				<div className={styles.textContainer}>
					<h3>What makes us a delectable choice?</h3>
					<p>
					We’re the new kids on the block (with old-school soul). At By Chance Bar & Bistro,
					 we keep the Nonna-approved pastas and legendary wine list, but we’ve cranked up the fun:
					</p>
					<Link href='/our-story' passHref>
						<button className={styles.btnDark}>Learn More</button>
					</Link>
				</div>
			</div>
		</section>
	);
}

export default Story;
