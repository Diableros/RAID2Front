import logo from 'img/logo.svg';
import { Link } from 'react-router-dom';

const Logo = () => {
	return (
		<Link to="/">
			<img src={logo} alt="Skyrent" />
		</Link>
	);
};

export default Logo;
