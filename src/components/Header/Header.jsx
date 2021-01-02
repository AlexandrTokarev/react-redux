import React from 'react';
import { NavLink } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

import './Header.scss';

const navItems = [
	{
		id: uuid(),
		title: 'Главная',
		path: '/home',
	},
	{
		id: uuid(),
		title: 'Задачи',
		path: '/tasks'
	}
]

const Header = () => {

	return (
		<header className='header'>
			<div className='container'>
				<div className="header__navbar">
					{navItems.map(item =>
						<NavLink
							key={item.id}
							className='header__navbar-item'
							activeClassName='header__navbar-item__active'
							to={item.path}
						>
							{item.title}
						</NavLink>
					)}
				</div>
			</div>
		</header>)
};

export default Header