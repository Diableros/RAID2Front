import Logo from '../logo/Logo';
import s from './Footer.module.scss';

const Footer = () => {
	return (
		<div className={s.footer}>
			<Logo />
			<p className={s.footer__year}>© 2023</p>
		</div>
	);
};

export default Footer;
