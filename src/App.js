import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import VendingMachine from './VendingMachine';
import Sardines from './Sardines';
import Soda from './Soda';
import Chips from './Chips';

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact>
					<VendingMachine />
				</Route>
				<Route path="/sardines" exact>
					<Sardines />
				</Route>
				<Route path="/soda" exact>
					<Soda />
				</Route>
				<Route path="/chips" exact>
					<Chips />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
