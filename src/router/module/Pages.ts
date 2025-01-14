import { RouteRecordRaw } from 'vue-router';

export const Pages: Array<RouteRecordRaw> = [
	{
		path: '/Pages',
		name: 'Pages',
		component: () => import('@/layout/index.vue'),
		meta: {
			title: 'system.menu.busiView',
			icon: 'Odometer',
			cache: true,
			show: true,
		},
		children: [
			{
				path: 'general',
				name: 'General',
				meta: {
					title: 'system.menu.general',
					icon: 'PieChart',
					cache: true,
					show: true,
				},
				component: () => import('@/views/Pages/General.vue'),
			},
			{
				path: 'dashboard',
				name: 'Dashboard',
				meta: {
					title: 'system.menu.chart',
					icon: 'PieChart',
					cache: true,
					show: true,
				},
				component: () => import('@/views/Pages/Dashboard.vue'),
			},
		],
	},
];
