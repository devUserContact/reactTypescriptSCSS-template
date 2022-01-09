import React from 'react';
import { Link } from 'react-router-dom';
import '../../index.scss';	

export const NavBar = () => {
	return (
	<div className="nav-bar-wrapper">
		<ul className="nav-bar">		
				<Link to="/">home </Link>			
		</ul>
		<ul className="nav-bar">		
				<Link to="/about">about </Link>
		</ul>
		<ul className="nav-bar">		
				<Link to="/media">media </Link>
		</ul>
		<ul className="nav-bar">		
				<Link to="/test">test </Link>
		</ul>
	</div>
	)	
}
