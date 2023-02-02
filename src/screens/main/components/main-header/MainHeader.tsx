import s from './MainHeader.module.scss';
import Logo from 'screens/shared_components/logo/Logo';
import { Link } from 'react-router-dom';
import FilterForm from '../filter-form/FilterForm';
import { getOptionsArr } from 'helpers/getOptionsArr';

const MainHeader = ({ places }: { places: PlaceType[] }) => {
	return (
		<div className={s.header}>
			<div className={s.header__top}>
				<Logo />
				<Link className={s.header__link} to="/about">
					О проекте
				</Link>
			</div>
			<h1 className={s.header__title}>Пора переезжать?</h1>
			<h2 className={s.header__slogan}>
				Находите места для жизни и работы по всему миру
			</h2>
			<FilterForm options={getOptionsArr(places)} />
		</div>
	);
};

export default MainHeader;
