import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import req from 'request/request';
import MainHeader from './components/main-header/MainHeader';
import PlaceCards from './components/place-cards/PlaceCards';
import s from './MainScreen.module.scss';

const MainScreen = () => {
	const [dataPlaces, setDataPlaces] = useState<PlaceType[] | null>(null);
	const [params, setParams] = useSearchParams();

	let request: string = 'places/?';
	if (params.has('city') && params.get('city') !== '0')
		request += 'city=' + params.get('city');
	if (params.has('from') && params.get('from') !== '0')
		request += '&from=' + params.get('from');
	if (params.has('to') && params.get('to') !== '0')
		request += '&to=' + params.get('to');

	useEffect(() => {
		req(request, (data) => {
			if (data.length) {
				setDataPlaces(data);
				return;
			}

			setDataPlaces([]);
		});
	}, [params]);

	return (
		<>
			<MainHeader />
			{dataPlaces !== null &&
			(params.has('city') || params.has('from') || params.has('to')) ? (
				<div className={s.filterCount}>Подобрано: {dataPlaces.length}</div>
			) : null}
			<PlaceCards places={dataPlaces} />
		</>
	);
};

export default MainScreen;
