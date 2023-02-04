import { FormEvent, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import Button from 'screens/shared_components/button/Button';
import s from './FilterForm.module.scss';

const FilterForm = ({ options }: { options: OptionType[] }) => {
	const [showForm, setShowForm] = useState<Boolean>(false);
	const [params, setParams] = useSearchParams();

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();

		const form = e.target as HTMLFormElement;
		const city: string = form.city.value;
		const priceFrom: string = form.priceFrom.value || '0';
		const priceTo: string = form.priceTo.value || '0';

		let params: [string, string][] = [];

		if (city !== '0') params.push(['city', city]);
		if (priceFrom !== '0') params.push(['from', priceFrom]);
		if (priceTo !== '0') params.push(['to', priceTo]);

		setParams(params);
	};

	return showForm ? (
		<form className={s.form} onSubmit={handleSubmit}>
			<select className={s.form__select} defaultValue="0" name="city">
				<option value="0" disabled hidden>
					Страна и город
				</option>
				<option value="0">Без фильтра по городу</option>
				{options.map((place) => (
					<option
						key={place.city}
						value={place.city}
					>{`${place.country} → ${place.city}`}</option>
				))}
			</select>
			<div className={s.form__priceBox}>
				<input
					className={s.form__priceInput}
					type="number"
					min="0"
					placeholder="Цена от"
					name="priceFrom"
				/>
				<input
					className={s.form__priceInput}
					type="number"
					min="0"
					placeholder="Цена до"
					name="priceTo"
				/>
			</div>
			<Button title="Подобрать" />
		</form>
	) : (
		<Button title="Подобрать недвижимость" action={() => setShowForm(true)} />
	);
};

export default FilterForm;
