import Image from 'next/image';
import { useRef, useEffect } from 'react';
import { SRLWrapper } from 'simple-react-lightbox';

// Import GSAP
import { gsap, Power4 } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js';

// Import components
import Footer from '../../components/Footer/Footer';
import Navigation from '../../components/Navigation/Navigation';
import PageBanner from '../../components/PageBanner/PageBanner';

// Import SASS file
import styles from '../../styles/Events.module.scss';

function Karaoke() {
	// Lightbox Styling
	const options = {
		buttons: {
			backgroundColor: 'rgba(17, 17, 17, 0)',
			iconColor: '#d8b57d',
		},
		caption: {
			captionColor: '#d8b57d',
			captionFontFamily: 'Raleway, sans-serif',
			captionFontWeight: '300',
		},
		thumbnails: {
			showThumbnails: false,
		},
	};

	// Refs
	let section = useRef(null);
	let sectionEvents = useRef(null);
	let gallery = useRef(null);

	gsap.registerPlugin(ScrollTrigger);
	let tl = gsap.timeline({ delay: 0.2 });

	// GSAP animation
	useEffect(() => {
		// Section Animation
		tl.from(
			section,
			{
				y: 100,
				opacity: 0,
				duration: 1.5,

				ease: Power4.easeOut,
			},
			0.5
		)
			.from(
				sectionEvents,
				{
					scrollTrigger: {
						trigger: sectionEvents,
						start: 'top bottom',
						end: '+=200',
						scrub: 1,
					},
					y: 100,
					opacity: 0,
					duration: 1.5,
					delay: 0.5,
					ease: Power4.easeOut,
				},
				0.5
			)
			.from(
				gallery,
				{
					scrollTrigger: {
						trigger: gallery,
						start: 'top bottom',
						end: '+=200',
						scrub: 1,
					},
					y: 100,
					opacity: 0,
					duration: 1.5,
					delay: 0.5,
					ease: Power4.easeOut,
				},
				0.5
			);
	}, [tl]);

	return (
		<>
			<Navigation />
			<PageBanner />

			<div className={styles.container} ref={(e) => (section = e)}>
				{/* Text Container */}
				<div className={styles.pageText}>
					<h2>Private Dining and Karaoke Nights</h2>
					<hr className={styles.divider} />
					<div>
						<h3>Karaoke Nights</h3>
						<p>
						"Unleash your inner rockstar at By Chance Bar and Bistro’s Karaoke Nights! Whether you're a seasoned performer or just singing for fun, our lively and welcoming atmosphere makes for an unforgettable night.
						 Grab the mic, belt out your favorite tunes, and enjoy a vibrant crowd that’s always ready to cheer you on. With a diverse song selection, great drinks, and an electric vibe, Karaoke Nights at By Chance are the perfect way to let loose and make memories!"
						</p>
						<p>
							For groups of 12 to 16 guests, a three course menu derived from
							the current a seasonal menu is applicable. The menu is
							priced resonably at $130 per person, with 4 dishes per course to select from
							on the day. Beverages are charged on consumption and a 10% service
							charge applies on the total amount.
						</p>
					</div>
					<div ref={(e) => (sectionEvents = e)}>
						<h3>Cocktail Events</h3>
						<p>
							The Private Dining Room can offered cocktail
							reception in  different configurations:
						</p>
						<p>
							<span>•</span>
							The Private Dining Room and  with a small section can
							accommodate up to a maximum of 10 guests i.e right next to the entry points.
						</p>
						<p>
							<span>•</span>
							The Private Dining Room can accommodate up to a maximum of 60guests.
						</p>
						<p>
							Please note that there is area  sectioned off from the remainder of
							bar and is  exclusively outside for smokers on both sides, and there would be no drinks allowed on the left section. A large portion of
							this area is weather permitting also.
						</p>
						<p>
							Our extensive  menu is based on the best seasonal produce at
							any given time and prepared with love by our Dear Chef.
						</p>
					</div>
				</div>

				{/* Image Gallery */}
				<SRLWrapper options={options}>
					<div className={styles.imgGallery} ref={(e) => (gallery = e)}>
						{/* Top Row */}
						<div className={styles.imgThumbnail}>
							<Image
								src='/gallery-private-1.jpg'
								alt='Private Dining Area'
								layout='fill'
								objectFit='cover'
								className={styles.item}
								placeholder='blur'
								blurDataURL='/blur/gallery-private-1.jpg'
							/>
						</div>
						<div className={styles.imgThumbnail}>
							<Image
								src='/gallery-private-2.jpg'
								alt='Private Dining Menu'
								layout='fill'
								objectFit='cover'
								className={styles.item}
								placeholder='blur'
								blurDataURL='/blur/gallery-private-2.jpg'
							/>
						</div>
						<div className={styles.imgThumbnail}>
							<Image
								src='/gallery-private-3.jpg'
								alt='Private Service'
								layout='fill'
								objectFit='cover'
								className={styles.item}
								placeholder='blur'
								blurDataURL='/blur/gallery-private-3.jpg'
							/>
						</div>
						<div className={styles.imgThumbnail}>
							<Image
								src='/gallery-private-4.jpg'
								alt='Request for a Premium Wine'
								layout='fill'
								objectFit='cover'
								className={styles.item}
								placeholder='blur'
								blurDataURL='/blur/gallery-private-4.jpg'
							/>
						</div>

						{/* Bottom Row */}
						<div className={styles.imgThumbnail}>
							<Image
								src='/gallery-private-5.jpg'
								alt='Host Cocktail Events'
								layout='fill'
								objectFit='cover'
								className={styles.item}
								placeholder='blur'
								blurDataURL='/blur/gallery-private-5.jpg'
							/>
						</div>
						<div className={styles.imgThumbnail}>
							<Image
								src='/gallery-private-6.jpg'
								alt='Fancy Setup for Guests'
								layout='fill'
								objectFit='cover'
								className={styles.item}
								placeholder='blur'
								blurDataURL='/blur/gallery-private-6.jpg'
							/>
						</div>
						<div className={styles.imgThumbnail}>
							<Image
								src='/gallery-private-7.jpg'
								alt='Private Dinner'
								layout='fill'
								objectFit='cover'
								className={styles.item}
								placeholder='blur'
								blurDataURL='/blur/gallery-private-7.jpg'
							/>
						</div>
						<div className={styles.imgThumbnail}>
							<Image
								src='/gallery-private-8.jpg'
								alt='Private Dining at By chance Bar and Bistro'
								layout='fill'
								objectFit='cover'
								className={styles.item}
								placeholder='blur'
								blurDataURL='/blur/gallery-private-8.jpg'
							/>
						</div>
					</div>
				</SRLWrapper>
			</div>

			<Footer />
		</>
	);
}

export default Karaoke;
