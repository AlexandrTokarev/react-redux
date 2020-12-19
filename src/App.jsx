import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Header } from './components';
import routes from './routes';

const loading = (
	<h3 style={{ textAlign: 'center', color: '#383838' }}>
		Загрузка...
	</h3>
);

const HelloWorld = () => {
	return (
		<Router>
			<Header />
			<main>
				<div className='content container'>
					<div className='content__card'>
						<React.Suspense fallback={loading}>
							<Switch>
								{routes.map((route, idx) => route.component &&
									<Route
										key={idx}
										path={route.path}
										exact={route.exact}
										name={route.name}
										render={props => <route.component {...props} />}
									/>
								)}
								<Redirect to='/home' />
							</Switch>
						</React.Suspense>
					</div>
				</div>
			</main>
		</Router>
	);
};

export default HelloWorld;
