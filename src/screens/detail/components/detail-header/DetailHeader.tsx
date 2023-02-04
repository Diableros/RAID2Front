import { useNavigate } from 'react-router-dom';
import s from './DetailHeader.module.scss';
import arrow from 'img/arrow_back.svg';
import Logo from 'screens/shared_components/logo/Logo';

const DetailHeader = () => {
	const navigate = useNavigate();

	return (
		<header className={s.header}>
			<img
				className={s.header__back}
				src={arrow}
				onClick={() => {
					navigate(-1);
				}}
			/>
			<Logo />
		</header>
	);
};

export default DetailHeader;
