import { useRef, useEffect } from 'react';

// Import components
import Footer from '../components/Footer/Footer';
import Navigation from '../components/Navigation/Navigation';
import PageBanner from '../components/PageBanner/PageBanner';

// Import GSAP
import { gsap, Power4 } from 'gsap';

// Import SASS file
import styles from '../styles/Menu.module.scss';

function Menu() {
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
			},
			0.2
		);
	}, [tl]);

	return (
		<>
			<Navigation />
			<PageBanner />

			<div className={styles.pageContent} ref={(e) => (section = e)}>
				<h2>Our Menu</h2>
				<hr className={styles.divider} />

				{/* Top Menu Container */}
				<div className={styles.topContainer}>
					{/* Soup & Salad Container */}
					<div className={styles.topLContainer}>
						<div className={styles.containerTitle}>
							<h2>Main Meals</h2>
							<br></br>
							<h4>Lasagne</h4>
							<p>
								Home Made chunky Lasagne with By Chance Signature chips and Salad <span>($20)</span>
							</p>
						</div>
						<div>
							<h5>Chicken Schnitzel</h5>
							<p>
							Home Made juicy chicken schnitzel{' '}
							<span>($20)
							</span>
							</p>
							<br />

							<h5>Salt and Pepper Squid</h5>
							<p>
								Tasty salt & pepper squid By Chance Signature chips,salad,tartare & Lemon{' '}
								<span>($17)</span>
							</p>
							<br />

							<h5>By Chance  Burger Pockets</h5>
							<p>
								Home made beef burger patty, wrapped with cheese, salad and aioli, served with By Chance signature chips <span>($15)</span>
							</p>
							<br />

							<h5>Chicken Burger</h5>
							<p>
								Burger with chicken schnitzel, cheese, bacon, salad, tomato & BBQ sauce served with By Chance signature chips
								<span>($17)</span>
							</p>
							<br />

							<h5>Sweet Chilli Tenders</h5>
							<p>
								Sweet Chilli chicken tenders served with By Chance signature chips and Salad <span>($15)</span>
							</p>
							<br />

							<h5>Menu subject to change Check for updates</h5>
							
							<br />
						</div>
					</div>

					{/* Snacks Menu Container */}
					<div className={styles.topRContainer}>
						<div className={styles.containerTitle}>
							<h2>Snacks</h2>
							<br></br>
							<h4>Toasties</h4>
							<p>Toasted Sandwich with your choice of filling(Ham, Salami, cheese , tomato)</p><span>$4.50</span>
						</div>
						<div>
							<h5>Homemade Pies</h5>
							<p>
								Various flavours, on display daily <span>($6)</span>
							</p>
							<br />

							<h5>Bowl of chipss</h5>
							<p>
								By Chance signature chips and sauce{' '}
								<span>($7)</span>
							</p>
							<br />

							<h5>Bowl of Wedges</h5>
							<p>
								Pub Style wedges wih sweet chilli and sour cream{' '}
								<span>($10)</span>
							</p>
							<br />

							<h5>Chicken Nuggets</h5>
							<p>
								10 Chicken nuggets with By Chance signature chips & sauce {'  '}
								<span>($15)</span>
							</p>
							<br />
							<div>
							<h5>Add Gravy   <span>$2</span></h5>{' '}
							<br></br>
							<h5>Add Chips   <span>$5</span></h5>{' '}
							</div>
							
							<br />
						</div>
					</div>
				</div>

				{/* Kids Menu Container */}
				<div className={styles.bottomContainer}>
					{/* Panini Container */}
					<div className={styles.bottomLContainer}>
						<div className={styles.containerTitle}>
							<h4>Panini</h4>
							<p>
								served with mixed greens salad, cup of soup, or roasted
								vegetables
							</p>
						</div>
						<div>
							<h5>Eggplant Parmigiana</h5>
							<p>
								Grilled eggplant, toamto, basil, mozzarella, balsamic vinegar
								<span>(10)</span>
							</p>
							<br />

							<h5>Umbria Turkey</h5>
							<p>
								Turkey breast, avocado, tomato, organic spring mix{' '}
								<span>(8)</span>
							</p>
							<br />

							<h5>Chicken Parmiagana</h5>
							<p>
								Grilled chicken breast, parmesan, mozzarella, marinara{' '}
								<span>(10)</span>
							</p>
							<br />

							<h5>Italian Sausage</h5>
							<p>
								Spicy sausage, roasted red peppers, onions, marinara{' '}
								<span>(11)</span>
							</p>
							<br />

							<h5>Salami and Goat Cheese</h5>
							<p>
								Spicy calabrese salami, roasted red peppers, goat cheese spread
								<span>(10)</span>
							</p>
							<br />
						</div>
					</div>

					{/* Pizza Container */}
					<div className={styles.bottomRContainer}>
						<div className={styles.containerTitle}>
							<h4>Pizza</h4>
							<p>one of the best pizzas in the city!</p>
						</div>
						<div>
							<h5>Margherita</h5>
							<p>
								San Marzano tomato sauce, fresh mozzarella, fresh basil{' '}
								<span>(10)</span>
							</p>
							<br />

							<h5>Bologna</h5>
							<p>
								Spicy salami, mozzarella, bolognese meat sauce <span>(12)</span>
							</p>
							<br />

							<h5>Vegetariana</h5>
							<p>
								Onion, tomato, bell pepper, mushrooms, olives <span>(11)</span>
							</p>
							<br />

							<h5>Quatro Formaggi</h5>
							<p>
								Mozzarella, fontina, ricotta, parmesan <span>(10)</span>
							</p>
							<br />

							<h5>Sicillian</h5>
							<p>
								Sweet Italian sausage, spicy Capicola ham, fontina, mozzarella,
								basil <span>(13)</span>
							</p>
							<br />

							<h5>By chance Bar and Bistro Special</h5>
							<p>
								Ricotta cheese cream sauce, tender to roast chicken, spinach,
								special sauce <span>(14)</span>
							</p>
							<br />
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
}

export default Menu;
