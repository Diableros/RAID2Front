import PlaceCard from '../place-card/PlaceCard';
import s from './PlaceCards.module.scss';

const PlaceCards = ({ places }: { places: PlaceType[] | null }) => {
	return (
		<main className={s.main}>
			{places === null ? (
				<div>Загружаем данные...</div>
			) : places.length ? (
				places.map((place) => <PlaceCard place={place} key={place.pk} />)
			) : (
				'Нет результатов по заданному фильтру!'
			)}
		</main>
	);
};

export default PlaceCards;
