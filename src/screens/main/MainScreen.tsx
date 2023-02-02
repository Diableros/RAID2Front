import { useState, useEffect } from 'react';
import req from 'request/request';
import MainHeader from './components/main-header/MainHeader';
import PlaceCards from './components/place-cards/PlaceCards';
import { ReqType } from 'request/request';

const MainScreen = () => {
	const [dataPlaces, setDataPlaces] = useState<PlaceType[]>([]);

	useEffect(() => {
		req(ReqType.All, (data) => setDataPlaces(data));
	}, []);

	return (
		<>
			<MainHeader places={dataPlaces} />
			<PlaceCards places={dataPlaces} />
		</>
	);
};

export default MainScreen;
