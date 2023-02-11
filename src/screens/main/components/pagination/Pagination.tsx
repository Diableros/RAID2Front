import clsx from 'clsx';
import { useNavigate, useSearchParams } from 'react-router-dom';
import s from './Pagination.module.scss';

const Pagination = ({
	pagination,
	position,
}: {
	pagination: PaginationType;
	position: 'top' | 'bottom';
}) => {
	const [params, setParams] = useSearchParams();
	const navigate = useNavigate();
	const btnArr: number[] = [];

	for (let i: number = 1; i <= pagination.pages; i++) {
		btnArr.push(i);
	}

	const handlePageClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
		window.scrollTo(0, 0);
		const button = e.target as HTMLElement;
		params.set('page', button.innerHTML);
		setParams(params);
	};

	return (
		<div
			className={clsx(
				s.box,
				position === 'top' && s.boxTop,
				position === 'bottom' && s.boxBottom
			)}
		>
			{btnArr.map((btn) => (
				<button
					key={btn + 'pageBtn'}
					onClick={handlePageClick}
					className={
						position === 'top'
							? clsx(s.btn, s.btnTop, pagination.page === btn && s.btnTopActive)
							: clsx(
									s.btn,
									s.btnBottom,
									pagination.page === btn && s.btnBottomActive
							  )
					}
				>
					{btn}
				</button>
			))}
		</div>
	);
};

export default Pagination;
