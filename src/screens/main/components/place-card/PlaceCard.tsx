import { Link } from 'react-router-dom';
import s from './PlaceCard.module.scss';

const PlaceCard = ({ place }: { place: PlaceType }) => {
	return (
		<div className={s.placeCard}>
			<Link to={`details/${place.pk}`}>
				<div
					className={s.placeCard__img}
					style={{ backgroundImage: `url('${place.picture_url})` }}
				/>
			</Link>
			<h3 className={s.placeCard__location}>
				{place.country} → {place.city}
			</h3>
			<p className={s.placeCard__description}>{place.description}</p>
			<p className={s.placeCard__price}>$ {place.price} / month</p>
		</div>
	);
};

export default PlaceCard;
