import Head from 'next/head';

// Import components
import Banner from '../components/Banner/Banner';
import Booking from '../components/Booking/Booking';
import Carousel from '../components/Carousel/Carousel';

import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Story from '../components/Story/Story';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Welcome to By Chance Bar and Bistro</title>
				<meta
					name='description'
					content='At By Chance Bar & Bistro, we’re all about local vibes, global flavors. 
					Drop in for a feed that’s fair dinkum delicious, minus the fancy price tag. See ya round!"**'
				/>
				<link rel='icon' href='/logo.ico' />
			</Head>

			<main>
				<Header />
				<Story />
				<Carousel />
				<Booking />
				<Banner />
			</main>

			<Footer />
		</div>
	);
}
