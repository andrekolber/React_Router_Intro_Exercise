import React from 'react';
import { Link } from 'react-router-dom';
import Message from './Message';
import sodaImg from './Soda.png';

const Soda = () => {
	return (
		<div>
			<img src={sodaImg} alt="coca cola can" />
			<Message>
				<h1>OMG SUGARRRRR</h1>
				<h1>
					<Link to="/">go back</Link>
				</h1>
			</Message>
		</div>
	);
};

export default Soda;
