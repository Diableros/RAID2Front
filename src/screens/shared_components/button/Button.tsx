import s from './Button.module.scss';

type PropsType = {
	title: string;
	action?: () => void | null;
};

const Button = ({ title, action }: PropsType) => {
	const handleOnClick = (): void => {
		if (action) action();

		// console.log(`btnclck: ${title}`);
	};

	return (
		<button className={s.button} onClick={() => handleOnClick()}>
			{title}
		</button>
	);
};

export default Button;
