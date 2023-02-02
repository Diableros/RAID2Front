import s from 'App.module.scss';
import { Outlet } from 'react-router-dom';
import Footer from 'screens/shared_components/footer/Footer';

function App() {
	return (
		<div className={s.wrapper}>
			<Outlet />
			<Footer />
		</div>
	);
}

export default App;
