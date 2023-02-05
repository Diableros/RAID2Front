import DetailHeader from 'screens/detail/components/detail-header/DetailHeader';
import s from './AboutScreen.module.scss';

const AboutScreen = () => {
	return (
		<>
			<DetailHeader />
			<h1 className={s.title}>SKYRENT</h1>
			<div className={s.aboutBlock}>
				MVP - реализация сервиса доски объявлений по длительной аренде жилья для
				релокации. Минимальная версия сервиса позволяет просматривать список,
				просматривать карточку, фильтровать и просматривать контакты арендатора.
			</div>
		</>
	);
};

export { AboutScreen };
