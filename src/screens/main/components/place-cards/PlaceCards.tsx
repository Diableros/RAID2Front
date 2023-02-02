import PlaceCard from '../place-card/PlaceCard';
import s from './PlaceCards.module.scss';

const PlaceCards = ({ places }: { places: PlaceType[] }) => {
	return (
		<main className={s.main}>
			{places.length
				? places.map((place) => <PlaceCard place={place} key={place.pk} />)
				: 'Загружаем данные...'}
		</main>
	);
};

export default PlaceCards;
