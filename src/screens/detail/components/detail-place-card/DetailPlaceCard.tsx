import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import s from './DetailPlaceCard.module.scss';
import req from 'request/request';
import markOn from 'img/feature_on_mark.svg';
import markOff from 'img/feature_off_mark.svg';
import Button from 'screens/shared_components/button/Button';

const DetailPlaceCard = () => {
	const params = useParams();
	const [place, setPlace] = useState<PlaceType | null>(null);
	const [showContacts, setShowContacts] = useState<Boolean>(false);

	useEffect(() => {
		req(`places/${params.pk}`, (data) => {
			setPlace(data[0]);
		});
	}, []);

	return place ? (
		<div className={s.placeCard}>
			<h3 className={s.location}>
				{place.country} → {place.city}
			</h3>
			<p className={s.price}>$ {place.price} / month</p>
			<div className={s.title}>{place.title}</div>
			<p className={s.description}>{place.description}</p>
			<div
				className={s.img}
				style={{ backgroundImage: `url('${place.picture_url})` }}
			/>
			<p className={s.featuresTitle}>Что есть внутри?</p>
			<ul className={s.featuresList}>
				{place?.features_on.split(',').map((elem, index) => (
					<li key={index + 'Zxy'} className={s.featuresItemOn}>
						<img src={markOn} className={s.featuresMarkOn} /> {elem.trim()}
					</li>
				))}
				{place?.features_off.split(',').map((elem, index) => (
					<li key={index + 'Zyz'} className={s.featuresItemOff}>
						<img src={markOff} className={s.featuresMarkOff} />
						{elem.trim()}
					</li>
				))}
			</ul>
			{showContacts ? (
				<div className={s.contacts}>
					<p className={s.contactsTitle}>Имя хоста</p>
					<p className={s.contactsInfo}>{place.host_name}</p>

					<p className={s.contactsTitle}>Телефон</p>
					<a
						className={s.contactsInfo}
						href={`tel:${place.host_phone.split('-').join('')}`}
					>
						{place.host_phone}
					</a>

					<p className={s.contactsTitle}>Адрес</p>
					<p className={s.contactsInfo}>{place.host_location}</p>
				</div>
			) : (
				<Button
					title={'Показать контактную информацию'}
					action={() => setShowContacts(true)}
				/>
			)}
		</div>
	) : (
		<div>Загружаем данные...</div>
	);
};

export default DetailPlaceCard;
