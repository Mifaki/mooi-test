import { DesktopOutlined } from '@ant-design/icons';
import { ItemsDataI } from './types';
import CRM from '../../../../routes/CRM/view/CRM';

export const staffRoutes: ItemsDataI[] = [
	{
		label: 'CRM',
		key: '/crm',
		path: '/crm',
		children: [],
		icon: <DesktopOutlined />,
		components: <CRM />,
		show: true,
	},
];
