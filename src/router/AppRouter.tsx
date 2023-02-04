import { ReactNode } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DetailScreen from 'screens/detail/DetailScreen';
import MainScreen from 'screens/main/MainScreen';

const AppRouter = ({ children }: { children: ReactNode }) => {
	const router = createBrowserRouter([
		{
			path: '/',
			element: children,
			children: [
				{
					path: '/',
					element: <MainScreen />,
				},
				{
					path: '/details/:pk',
					element: <DetailScreen />,
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
};

export default AppRouter;
