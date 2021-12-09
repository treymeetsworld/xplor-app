import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
	return (
		<>
			{user ? (
				<nav>
					<div className="access">
						<ul>
							<li>
								Welcome, {user.name}
							</li>
							<li>
								<Link to='' onClick={handleLogout}>LOG OUT</Link>
							</li>
							<li>
								<Link to='/profile' onClick="">Profile</Link>
							</li>
						</ul>
					</div>
				</nav>
			) : (
				<nav>
					<div>
						<ul>
							<li>
								<Link to="/login" className="access">Log In</Link>
							</li>
							<li>
								<Link to="/signup" className="access">Sign Up</Link>
							</li>
						</ul>
					</div>
				</nav>
			)}
		</>
	)
}

export default NavBar
