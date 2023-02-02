import { FormEvent, useState } from 'react';
import Button from 'screens/shared_components/button/Button';
import s from './FilterForm.module.scss';

const FilterForm = ({ options }: { options: OptionType[] }) => {
	const [showForm, setShowForm] = useState<Boolean>(false);

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		console.log('From submit prevent');
	};

	return showForm ? (
		<form className={s.form} onSubmit={(e) => handleSubmit(e)}>
			<select className={s.form__select} defaultValue="0">
				<option value="0" disabled hidden>
					Страна и город
				</option>
				{options.map((place) => (
					<option
						key={`${place.country}-${place.city}`}
						value={`${place.country}-${place.city}`}
					>{`${place.country} → ${place.city}`}</option>
				))}
			</select>
			<div className={s.form__priceBox}>
				<input
					className={s.form__priceInput}
					type="number"
					min="0"
					placeholder="Цена от"
				/>
				<input
					className={s.form__priceInput}
					type="number"
					min="0"
					placeholder="Цена до"
				/>
			</div>
			<Button title="Подобрать" />
		</form>
	) : (
		<Button title="Подобрать недвижимость" action={() => setShowForm(true)} />
	);
};

export default FilterForm;
