import styles from './Footer.module.scss';

function Footer() {
	return (
		<footer className={styles.footerContainer}>
			<div className={styles.tag}>
				<h5>@By chance Bar and Bistro</h5>
				<p>Your new local where the tucker’s hearty, the beers are cold, and the bullshit’s left at the door.</p>
			</div>

			<div className={styles.sections}>
				<div>
					<p>About</p>
					<ul>
						<li>Our Chefs</li>
						<li>Careers</li>
					</ul>
				</div>
				<div>
					<p>Menu</p>
					<ul>
						<li>Appetizer</li>
						<li>Main Course</li>
						<li>Dessert</li>
						<li>Drinks</li>
					</ul>
				</div>
				
				<div>
					<p>Contact</p>
					<ul>
						<li>Email Us</li>
						<li>FAQ</li>
						<li>Reservation</li>
					</ul>
				</div>
			</div>

			<div className={styles.hours}>
				<p className={styles.hoursTitle}>Operating Hours</p>
				<ul>
					<li>
						<p>Monday - Friday:</p>
						<p>10:00AM - 9:00PM</p>
					</li>
					<li>
						<p>Saturday - Sunday:</p>
						<p>10:00AM - 7:00PM</p>
					</li>
				</ul>
			</div>
		</footer>
	);
}

export default Footer;
