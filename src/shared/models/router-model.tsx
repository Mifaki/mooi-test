import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../presentations/general-layout/view/RootLayout';
import NotFound from '../presentations/not-found/NotFound';
import generateRoutesChild from '../usecase/useRenderRoutes';

/**
 * INFO: This is where routes and components belongs
 */

export const router = createBrowserRouter([

	// Default routes is not set for the purpose of the test only
	{
		path: '/crm',
		element: <RootLayout />,
		children: generateRoutesChild(),
		errorElement: <NotFound />,
	},
	// {
	// 	path: '/login',
	// 	element: <LoginContainer />,
	// },
]);
