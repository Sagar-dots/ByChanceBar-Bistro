import Image from 'next/image';
import { useRef, useEffect } from 'react';

// Import components
import Footer from '../components/Footer/Footer';
import Navigation from '../components/Navigation/Navigation';
import PageBanner from '../components/PageBanner/PageBanner';

// Import GSAP
import { gsap, Power4 } from 'gsap';

// Import SASS file
import styles from '../styles/OurStory.module.scss';

export default function OurStory() {
	// Refs
	let section = useRef(null);

	let tl = gsap.timeline({ delay: 0.3 });

	// GSAP animation
	useEffect(() => {
		// Section Animation
		tl.from(
			section.children,
			{
				y: 100,
				opacity: 0,
				duration: 1.5,
				ease: Power4.easeOut,
				stagger: 0.5,
			},
			0.2
		);
	}, [tl]);

	return (
		<>
			<Navigation />
			<PageBanner />
			<div className={styles.pageContent} ref={(e) => (section = e)}>
				<div className={styles.pageText}>
					<h2>Our Story</h2>
					<hr className={styles.divider} />
					<p>
						Serious food in a chilled-out setting, without pretence or the
						price-tag, offering guilt-free Italian dining since 2006.
					</p>
					<p>
						You’ll find well-cooked, honest, uncomplicated but imaginative food,
						with a huge emphasis on locally sourced produce. We love our artisan
						suppliers and get a buzz out of finding new specialist providers to
						work with.
					</p>
					<p>
						What else will you find at By chance Bar and Bistro restaurant? Unfussy,
						knowledgeable service from staff who actually love food and love
						looking after people. Modern, informal interiors and atmosphere,
						where we want you to be able to kick back, relax over a nice glass
						of wine (or two!) and enjoy our de-poshified fine food. And a cosy
						bar where you can chill in comfort after an unhurried meal. We also
						host events such as weddings and private dinners, so please let us
						know if we can help plan and deliver the party of your dreams.
					</p>
					<p>
						All day dining. Join us for lunch, dinner and anytime in between.
					</p>
				</div>
				<Image
					src='/story-page.jpg'
					width={600}
					height={900}
					objectFit='contain'
					alt='Our Story Page Main Image'
					placeholder='blur'
					blurDataURL='/blur/story-page.jpg'
					className={styles.storyImg}
				/>
			</div>
			<Footer />
		</>
	);
}
