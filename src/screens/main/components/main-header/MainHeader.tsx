import { useEffect, useState } from 'react';
import s from './MainHeader.module.scss';
import Logo from 'screens/shared_components/logo/Logo';
import { Link } from 'react-router-dom';
import FilterForm from '../filter-form/FilterForm';
import { getOptionsArr } from 'helpers/getOptionsArr';
import req from 'request/request';

const MainHeader = () => {
	const [dataPlaces, setDataPlaces] = useState<PlaceType[]>([]);

	useEffect(() => {
		req('places', (data) => {
			if (data.length) setDataPlaces(data);
		});
	}, []);

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
			<FilterForm options={getOptionsArr(dataPlaces)} />
		</div>
	);
};

export default MainHeader;
