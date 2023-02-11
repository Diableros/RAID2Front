import clsx from 'clsx';
import { FormEvent, useState, useLayoutEffect, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Button from 'screens/shared_components/button/Button';
import s from './FilterForm.module.scss';
import { requestOptions as req } from 'request/request';

const FilterForm = () => {
	const [options, setOptions] = useState<OptionType[]>([]);

	useEffect(() => {
		req((data) => {
			if (data.length) setOptions(data);
		});
	}, []);

	const [showForm, setShowForm] = useState<Boolean>(false);
	const [showDropList, setShowDropList] = useState<Boolean>(false);
	const [params, setParams] = useSearchParams();
	const [selectInputValue, setSelectInputValue] =
		useState<string>('Страна и город');

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();

		const form = e.target as HTMLFormElement;
		const value = form.city.value as string;
		const city = value.split(' ').at(-1) as string;
		const priceFrom: string = form.priceFrom.value || '0';
		const priceTo: string = form.priceTo.value || '0';

		if (!['город', 'городу'].includes(city)) {
			params.set('city', city), params.delete('page');
		} else {
			params.delete('city');
		}
		if (priceFrom !== '0') {
			params.set('from', priceFrom);
		} else {
			params.delete('from');
		}
		if (priceTo !== '0') {
			params.set('to', priceTo);
		} else {
			params.delete('to');
		}

		setParams(params);
	};

	const handleClickSelectInput = () => {
		setShowDropList((prev) => !prev);
	};

	const handleClickDropList: React.MouseEventHandler<HTMLDivElement> = (e) => {
		const clickedItem = e.target as HTMLElement;

		const text = clickedItem.textContent as string;
		setSelectInputValue(text);
		setShowDropList(false);
	};

	useLayoutEffect(() => {
		const selectInput: HTMLElement | null = document.querySelector(
			`.${s.select}`
		);
		const selectDropList: HTMLElement | null = document.querySelector(
			`.${s.select__dropList}`
		);

		if (selectDropList && selectInput)
			selectDropList.style.cssText = `top: ${
				selectInput.offsetTop + selectInput.offsetHeight + 10
			}px; left ${selectInput.offsetLeft}px; width: ${
				selectInput.clientWidth + 2
			}px`;
	}, [showForm]);

	return showForm ? (
		<form className={s.form} onSubmit={handleSubmit}>
			<input
				className={s.select}
				type="text"
				value={selectInputValue}
				name="city"
				readOnly
				onClick={handleClickSelectInput}
			/>

			<div
				onClick={handleClickDropList}
				className={clsx(
					s.select__dropList,
					showDropList && s.select__dropList_show
				)}
			>
				<div key="Xyz" className={s.select__listItem}>
					Без фильтрации по городу
				</div>
				{options.map((place) => (
					<div key={place.country + place.city} className={s.select__listItem}>
						{place.country + ' → ' + place.city}
					</div>
				))}
			</div>

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
