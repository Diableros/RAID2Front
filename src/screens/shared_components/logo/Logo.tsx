import logo from 'img/logo.svg';
import { useNavigate } from 'react-router-dom';
import s from './Logo.module.scss';

const Logo = () => {
	const navigate = useNavigate();

	const goHome = () => {
		navigate('/', { replace: true });
		window.scrollTo(0, 0);
	};

	return <img className={s.logo} src={logo} alt="Skyrent" onClick={goHome} />;
};

export default Logo;
