const BASE_API_URL = 'https://api.npoint.io/75ade590abcb9573ac3f';

export enum ReqType {
	All = 'All',
}

const request = (reqType: ReqType, callback: (data: PlaceType[]) => void) => {
	fetch(BASE_API_URL)
		.then((res) => res.json())
		.then((data) => {
			switch (reqType) {
				case ReqType.All:
					callback(data);
					break;
				default:
					return null;
			}
		});
};

export default request;
