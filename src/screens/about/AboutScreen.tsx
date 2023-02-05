import DetailHeader from 'screens/detail/components/detail-header/DetailHeader';
import s from './AboutScreen.module.scss';

const AboutScreen = () => {
	return (
		<>
			<DetailHeader />
			<h1 className={s.title}>SKYRENT</h1>
			<div className={s.aboutBlock}>
				MVP реализация сервиса доски объявлений по длительной аренде жилья для
				релокации. Минимальная версия сервиса позволяет просматривать список,
				просматривать карточку, фильтровать и просматривать контакты арендатора.
			</div>
			<div className={s.creds}>
				<h2 className={s.creds__subtitle}>Event: RAID 2</h2>
				<p className={s.creds__name}>Реализация команды #1</p>
				<h1 className={s.creds__title}>"Dream Team"</h1>
				<p className={s.creds__name}>Frontend: Иван</p>
				<p className={s.creds__name}>Backend: Владислав</p>
				<p className={s.creds__name}>Tester: Наталья</p>
			</div>
		</>
	);
};

export { AboutScreen };
