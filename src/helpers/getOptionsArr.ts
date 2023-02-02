export const getOptionsArr = (places: PlaceType[]): OptionType[] => {
	const result: OptionType[] = [];
	const duplicatesIndices: number[] = [];

	const arr: OptionType[] = places.map((place) => ({
		country: place.country,
		city: place.city,
	}));

	arr.forEach((current: OptionType, index: number) => {
		if (duplicatesIndices.includes(index)) return;

		result.push(current);

		for (
			let comparisonIndex = index + 1;
			comparisonIndex < arr.length;
			comparisonIndex++
		) {
			const comparison = arr[comparisonIndex];
			const currentKeys = Object.keys(current);
			const comparisonKeys = Object.keys(comparison);

			if (currentKeys.length !== comparisonKeys.length) continue;

			const currentKeysString = currentKeys.sort().join('').toLowerCase();
			const comparisonKeysString = comparisonKeys.sort().join('').toLowerCase();
			if (currentKeysString !== comparisonKeysString) continue;

			let valuesEqual = true;
			for (let i = 0; i < currentKeys.length; i++) {
				const key = currentKeys[i];
				if (
					current[key as keyof OptionType] !==
					comparison[key as keyof OptionType]
				) {
					valuesEqual = false;
					break;
				}
			}
			if (valuesEqual) duplicatesIndices.push(comparisonIndex);
		}
	});

	return result.sort((a, b) => (a.country > b.country ? 1 : -1));
};
