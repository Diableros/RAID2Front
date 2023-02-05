import { ReactNode } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AboutScreen } from 'screens/about/AboutScreen';
import DetailScreen from 'screens/detail/DetailScreen';
import MainScreen from 'screens/main/MainScreen';
import { NotFoundScreen } from 'screens/notfound/NotFoundScreen';

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
					path: 'details/:pk',
					element: <DetailScreen />,
				},
				{
					path: 'about',
					element: <AboutScreen />,
				},
			],
		},
		{
			path: '/*',
			element: <NotFoundScreen />,
		},
	]);

	return <RouterProvider router={router} />;
};

export default AppRouter;
