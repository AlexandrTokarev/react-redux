import { lazy } from 'react';

const Tasks = lazy(() => import('./pages/Tasks'));
const Home = lazy(() => import('./pages/Home'));

const routes = [
	{ path: '/home', exact: true, name: 'Главная', component: Home },
	{ path: '/tasks', exact: true, name: 'Задачи', component: Tasks }

];

export default routes;