const BASE_API_URL = 'https://vladislavrusin.pythonanywhere.com/places/';

export const requestData = (
	params: string,
	callback: (data: BackResponseType) => void
) => {
	fetch(BASE_API_URL + 's/?' + params)
		.then((res) => res.json())
		.then((data) => {
			callback(data);
		});
};

export const requestOptions = (callback: (data: OptionType[]) => void) => {
	fetch(BASE_API_URL + 'filter_options')
		.then((res) => res.json())
		.then((data) => {
			callback(data);
		});
};
