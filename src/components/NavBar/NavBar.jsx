import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
	return (
		<>
			{user ? (
				<nav class="navbar navbar-expand-lg">
					<div class="container-fluid access">
						<Link className="navbar-brand" to='/'>X'plor</Link>
						<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
							<span class="navbar-toggler-icon"></span>
						</button>
						<div class="collapse navbar-collapse" id="navbarNav">
							<ul class="navbar-nav">
								<li class="nav-item">
									<Link className="navbar-brand" to='' onClick={handleLogout}>Log Out</Link>
								</li>
								<li class="nav-item">
									<Link className="navbar-brand" to='/profile' onClick="">{user.name}'s Profile</Link>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			) : (
				<nav class="navbar navbar-expand-lg navbar-light bg-light">
					<div class="container-fluid access">
						<Link className="navbar-brand" to='/'>X'plor</Link>
						<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
							<span class="navbar-toggler-icon"></span>
						</button>
						<div class="collapse navbar-collapse" id="navbarNav">
							<ul class="navbar-nav">
								<li class="nav-item">
									<Link class="navbar-brand" to="/login" className="access">Log In</Link>
								</li>
								<li class="nav-item">
									<Link class="navbar-brand" to="/signup" className="access">Sign Up</Link>
								</li>
							</ul>
						</div>
					</div>
				</nav>

			)}
		</>
	)
}

export default NavBar
