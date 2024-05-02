import React from 'react';

import { Layout, theme } from 'antd';
import { Outlet } from 'react-router-dom';
import CustomHeader from './presentation/CustomHeader/CustomHeader';

const { Content } = Layout;

const RootLayout: React.FC = () => {
	const {
		token: { borderRadiusLG },
	} = theme.useToken();

	/**
	 * Generating items menu to rendered
	 * only show: true will be rendered
	 */

	return (
		<Layout style={{ minHeight: '100vh' }}>
			<Layout>
				<CustomHeader />
				<Content style={{ margin: '0 16px' }}>
					<div
						style={{
							padding: 24,
							minHeight: '100vh',
							borderRadius: borderRadiusLG,
							marginTop: 20,
							marginBottom: 20,
						}}>
						<Outlet />
					</div>
				</Content>
			</Layout>
		</Layout>
	);
};

export default RootLayout;
