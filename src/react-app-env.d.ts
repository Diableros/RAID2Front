/// <reference types="react-scripts" />

type PlaceType = {
	pk: number;
	city: string;
	country: string;
	description: string;
	features_off: string;
	features_on: string;
	host_location: string;
	host_name: string;
	host_phone: string;
	picture_url: string;
	price: number;
	title: string;
};

type OptionType = { country: string; city: string };
