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

function ExclusiveEvents() {
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
		).from(
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
					<h2>Exclusive Events</h2>
					<hr className={styles.divider} />
					<div>
						<h3>Why Choose By chance Bar and Bistro?</h3>
						<p>
							By chance Bar and Bistro has developed a network of trusted professionals at the
							top of their respective fields who can assist you in all areas of
							event management from AV requirements to complete event concepts
							and decoration. This assistance provides a one-stop shop approach
							to functions usually only found at larger venues.
						</p>
						<p>
							By chance Bar and Bistro is able to cater for up to 140 people sit-down and 325
							people stand-up. There is a balcony for pre-lunch or dinner drinks
							(weather permitting) and the priceless views of the city that can
							be absorbed by each and every guest.
						</p>
						<p>
							The minimum food and beverage spend to book By chance Bar and Bistro is calculated
							on the day, time and month of your event. To give you an
							indication of pricing, it will be between $45,000 - $75,000 + 10%
							service charge on the total account.
						</p>
						<p>The minimum spend includes:</p>
						<p>
							<span>•</span>
							Exclusive use of By chance Bar and Bistro; food and beverages on consumption,
							linen for all tables (this is not included in the min spend),
							labour for the duration of the function, By chance Bar and Bistro orange lamps as
							centerpieces (optional)
						</p>
						<p>Additional Expenses not included in the minimum spend:</p>
						<p>
							<span>•</span>
							Entertainment, linen for the tables, microphone & lectern (if that
							provided by the entertainment cannot be utilised), guest list,
							alternative centrepieces
						</p>
						<p>
							Beverages are all served on a consumption basis. We require a
							pre-selection of one champagne or sparkling wine, one white and
							one red wine along with one premium beer to be served on the
							evening. We would liaise with a designated contact on the day
							regarding beverages on consumption, so that the minimum spend or
							set budget does not exceed without your knowledge.
						</p>
					</div>
				</div>

				{/* Image Gallery */}
				<SRLWrapper options={options}>
					<div className={styles.imgGallery} ref={(e) => (gallery = e)}>
						{/* Top Row */}
						<div className={styles.imgThumbnail}>
							<Image
								src='/gallery-exclusive-1.jpg'
								alt='Space even for Large Groups'
								layout='fill'
								objectFit='cover'
								className={styles.item}
								placeholder='blur'
								blurDataURL='/blur/gallery-exclusive-1.jpg'
							/>
						</div>
						<div className={styles.imgThumbnail}>
							<Image
								src='/gallery-exclusive-2.jpg'
								alt='Exclusive Events'
								layout='fill'
								objectFit='cover'
								className={styles.item}
								placeholder='blur'
								blurDataURL='/blur/gallery-exclusive-2.jpg'
							/>
						</div>
						<div className={styles.imgThumbnail}>
							<Image
								src='/gallery-exclusive-3.jpg'
								alt='Happy Hour'
								layout='fill'
								objectFit='cover'
								className={styles.item}
								placeholder='blur'
								blurDataURL='/blur/gallery-exclusive-3.jpg'
							/>
						</div>
						<div className={styles.imgThumbnail}>
							<Image
								src='/gallery-exclusive-4.jpg'
								alt='Delicious Food at By chance Bar and Bistro'
								layout='fill'
								objectFit='cover'
								className={styles.item}
								placeholder='blur'
								blurDataURL='/blur/gallery-exclusive-4.jpg'
							/>
						</div>

						{/* Bottom Row */}
						<div className={styles.imgThumbnail}>
							<Image
								src='/gallery-exclusive-5.jpg'
								alt='For Any Occasion'
								layout='fill'
								objectFit='cover'
								className={styles.item}
								placeholder='blur'
								blurDataURL='/blur/gallery-exclusive-5.jpg'
							/>
						</div>
						<div className={styles.imgThumbnail}>
							<Image
								src='/gallery-exclusive-6.jpg'
								alt='Request for Additional Beverages'
								layout='fill'
								objectFit='cover'
								className={styles.item}
								placeholder='blur'
								blurDataURL='/blur/gallery-exclusive-6.jpg'
							/>
						</div>
						<div className={styles.imgThumbnail}>
							<Image
								src='/gallery-exclusive-7.jpg'
								alt='Table Setup'
								layout='fill'
								objectFit='cover'
								className={styles.item}
								placeholder='blur'
								blurDataURL='/blur/gallery-exclusive-7.jpg'
							/>
						</div>
						<div className={styles.imgThumbnail}>
							<Image
								src='/gallery-exclusive-8.jpg'
								alt='We Only Offer Delicious Food'
								layout='fill'
								objectFit='cover'
								className={styles.item}
								placeholder='blur'
								blurDataURL='/blur/gallery-exclusive-8.jpg'
							/>
						</div>
					</div>
				</SRLWrapper>
			</div>

			<Footer />
		</>
	);
}

export default ExclusiveEvents;
