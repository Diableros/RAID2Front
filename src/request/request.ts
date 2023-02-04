const BASE_API_URL = 'https://vladislavrusin.pythonanywhere.com/';

const request = (params: string, callback: (data: PlaceType[]) => void) => {
	fetch(BASE_API_URL + params)
		.then((res) => res.json())
		.then((data) => {
			callback(data);
		});
};

export default request;
