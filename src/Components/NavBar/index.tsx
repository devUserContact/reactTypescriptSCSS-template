import React from 'react';
import { Link } from 'react-router-dom';
import '../../index.scss';	

export const NavBar = () => {
	return (
		<div className="navBar-container">
			<Link className="navBar" to="/">home </Link>			
			<Link className="navBar" to="/about">about </Link>
			<Link className="navBar" to="/media">media </Link>
			<Link className="navBar" to="/test">test </Link>
			<div className="spacer"> 
			</div>
		</div>
	)	
}
