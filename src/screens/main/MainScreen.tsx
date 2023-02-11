import { useState, useLayoutEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { requestData as req } from 'request/request';
import MainHeader from './components/main-header/MainHeader';
import Pagination from './components/pagination/Pagination';
import PlaceCards from './components/place-cards/PlaceCards';
import s from './MainScreen.module.scss';

const MainScreen = () => {
	const [dataPlaces, setDataPlaces] = useState<PlaceType[] | null>(null);
	const [params, setParams] = useSearchParams();
	const [pagination, setPagination] = useState<PaginationType>({
		pages: 0,
		page: 0,
		totalObjects: 0,
	});

	useLayoutEffect(() => {
		req(params.toString(), (resp) => {
			if (resp.data.length > 1) {
				setPagination(resp.pagination);

				setDataPlaces(resp.data);
				return;
			}

			setPagination({
				pages: 0,
				page: 0,
				totalObjects: 0,
			});
			setDataPlaces([]);
		});
	}, [params]);

	return (
		<>
			<MainHeader />
			{dataPlaces !== null &&
			(params.has('city') || params.has('from') || params.has('to')) ? (
				<div className={s.filterCount}>
					Подобрано: {pagination.totalObjects}
				</div>
			) : null}
			{pagination.pages > 1 ? (
				<Pagination pagination={pagination} position={'top'} />
			) : null}
			<PlaceCards places={dataPlaces} />
			{pagination.pages > 1 ? (
				<Pagination pagination={pagination} position={'bottom'} />
			) : null}
		</>
	);
};

export default MainScreen;
