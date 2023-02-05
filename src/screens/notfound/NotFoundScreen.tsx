import Logo from 'screens/shared_components/logo/Logo';
import s from './NotFoundScreen.module.scss';
import w from '../../App.module.scss';

const NotFoundScreen = () => {
	return (
		<div className={w.wrapper}>
			<div className={s.wrapper}>
				<h1 className={s.title}>404</h1>
				<div className={s.text}>Запрашиваемая страница не найдена.</div>
				<p>Пойти на главную</p>
				<Logo />
			</div>
		</div>
	);
};

export { NotFoundScreen };
