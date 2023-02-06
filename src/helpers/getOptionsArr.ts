export const getOptionsArr = (places: PlaceType[]): OptionType[] | [] => {
	const arr: OptionType[] = places.map(
		(place) => place.country + ' → ' + place.city
	);

	const uniqList = new Set(arr);
	return Array.from(uniqList).sort((a, b) => (a > b ? 1 : -1));
};
