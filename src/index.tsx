import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'App';
import 'global-style/index.scss';
import AppRouter from 'router/AppRouter';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<AppRouter>
			<App />
		</AppRouter>
	</React.StrictMode>
);
