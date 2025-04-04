import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import styles from './Navigation.module.scss';

function Navigation() {
	return (
		<Navbar
			variant='dark'
			expand='md'
			fixed='top'
			className={styles.navContainer}
		>
			<Container fluid>
				<Navbar.Brand href='/' className={styles.brand}>
					By Chance Bar and Bistro
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='navbarScroll' />
				<Navbar.Collapse id='navbarScroll' className='justify-content-end'>
					<Nav navbarScroll>
						<Nav.Link href='/our-story' className={styles.navLink}>
							Our Story
						</Nav.Link>
						<Nav.Link href='/menu' className={styles.navLink}>
							Menu
						</Nav.Link>
						<Nav.Link href='/contact' className={styles.navLink}>
							Contact
						</Nav.Link>

						<NavDropdown title='Events' id='navbarScrollingDropdown'>
							<NavDropdown.Item href='/events/Karaoke-Nights'>
								Karaoke Nights
							</NavDropdown.Item>
							<NavDropdown.Item href='/events/exclusive-events'>
								Exclusive Events
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Navigation;
