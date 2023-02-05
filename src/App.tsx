import { useState, useEffect } from 'react';
import s from 'App.module.scss';
import { Outlet } from 'react-router-dom';
import Footer from 'screens/shared_components/footer/Footer';
import arrowUp from 'img/arrow_up.svg';
import clsx from 'clsx';

function App() {
	const [scroll, setScroll] = useState<number>(0);
	const [showUpButton, setShowUpButton] = useState<Boolean>(false);

	const handleScroll = () => {
		setScroll(window.scrollY);
	};

	const handleUpButton = () => {
		window.scrollTo(0, 0);
	};

	useEffect(() => {
		if (scroll > document.documentElement.clientHeight * 0.6) {
			setShowUpButton(true);
		} else {
			setShowUpButton(false);
		}
	}, [scroll]);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<>
			<div className={s.wrapper}>
				<Outlet />
				<Footer />

				<img
					className={clsx(s.upButton, showUpButton && s.showButton)}
					src={arrowUp}
					onClick={handleUpButton}
				/>
			</div>
		</>
	);
}

export default App;
