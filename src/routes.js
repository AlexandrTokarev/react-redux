import { lazy } from 'react';

const Tasks = lazy(() => import('./pages/Tasks'));
const About = lazy(() => import('./pages/About'));
const Home = lazy(() => import('./pages/Home'));

const routes = [
	{ path: '/home', exact: true, name: 'Главная', component: Home },
	{ path: '/tasks', exact: true, name: 'Задачи', component: Tasks },
	{ path: '/about-me', exact: true, name: 'Обо мне', component: About },

];

export default routes;