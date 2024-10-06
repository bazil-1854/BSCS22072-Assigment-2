import React from 'react'
import { NavLink } from 'react-router-dom'
const PagesBlank = () => {
  return (
    <div class="wrapper">
		<nav id="sidebar" className="sidebar js-sidebar">
                <div className="sidebar-content js-simplebar">
                    <NavLink className="sidebar-brand" to="/">
                        <span className="align-middle">AdminKit</span>
                    </NavLink>

                    <ul className="sidebar-nav">
                        <li className="sidebar-header">
                            Pages
                        </li>
                        <li className="sidebar-item active">
                            <NavLink className="sidebar-link" to="/">
                                <i className="align-middle" data-feather="sliders"></i> <span className="align-middle">Dashboard</span>
                            </NavLink>
                        </li>
                        <li className="sidebar-item">
                            <NavLink className="sidebar-link" to="/pages-profile">
                                <i className="align-middle" data-feather="user"></i> <span className="align-middle">Profile</span>
                            </NavLink>
                        </li>

                        <li className="sidebar-item">
                            <NavLink className="sidebar-link" to="/pages-SignIn">
                                <i className="align-middle" data-feather="log-in"></i> <span className="align-middle">Sign In</span>
                            </NavLink>
                        </li>

                        <li className="sidebar-item">
                            <NavLink className="sidebar-link" to="/pages-SignUp">
                                <i className="align-middle" data-feather="user-plus"></i> <span className="align-middle">Sign Up</span>
                            </NavLink>
                        </li>

                        <li className="sidebar-item">
                            <NavLink className="sidebar-link" to="/pages-profile">
                                <i className="align-middle" data-feather="book"></i> <span className="align-middle">Blank</span>
                            </NavLink>
                        </li>

                        <li className="sidebar-header">
                            Tools & Components
                        </li>

                        <li className="sidebar-item">
                            <NavLink className="sidebar-link" to="/ui-buttons">
                                <i className="align-middle" data-feather="square"></i> <span className="align-middle">Buttons</span>
                            </NavLink>
                        </li>

                        <li className="sidebar-item">
                            <NavLink className="sidebar-link" to="/ui-forms">
                                <i className="align-middle" data-feather="check-square"></i> <span className="align-middle">Forms</span>
                            </NavLink>
                        </li>

                        <li className="sidebar-item">
                            <NavLink className="sidebar-link" to="/ui-cards">
                                <i className="align-middle" data-feather="grid"></i> <span className="align-middle">Cards</span>
                            </NavLink>
                        </li>

                        <li className="sidebar-item">
                            <NavLink className="sidebar-link" to="/ui-typography">
                                <i className="align-middle" data-feather="align-left"></i> <span className="align-middle">Typography</span>
                            </NavLink>
                        </li>

                        <li className="sidebar-item">
                            <NavLink className="sidebar-link" to="/ui-icons">
                                <i className="align-middle" data-feather="coffee"></i> <span className="align-middle">Icons</span>
                            </NavLink>
                        </li>

                        <li className="sidebar-header">
                            Plugins & Addons
                        </li>

                        <li className="sidebar-item">
                            <NavLink className="sidebar-link" href="charts-chartjs.html">
                                <i className="align-middle" data-feather="bar-chart-2"></i> <span className="align-middle">Charts</span>
                            </NavLink>
                        </li>

                        <li className="sidebar-item">
                            <NavLink className="sidebar-link" href="maps-google.html">
                                <i className="align-middle" data-feather="map"></i> <span className="align-middle">Maps</span>
                            </NavLink>
                        </li>
                    </ul>

                    <div className="sidebar-cta">
                        <div className="sidebar-cta-content">
                            <strong className="d-inline-block mb-2">Upgrade to Pro</strong>
                            <div className="mb-3 text-sm">
                                Are you looking for more components? Check out our premium version.
                            </div>
                            <div className="d-grid">
                                <NavLink to="/upgrade-to-pro" className="btn btn-primary">Upgrade to Pro</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

		<div class="main">
			<nav class="navbar navbar-expand navbar-light navbar-bg">
				<a class="sidebar-toggle js-sidebar-toggle">
          <i class="hamburger align-self-center"></i>
        </a>

				<div class="navbar-collapse collapse">
					<ul class="navbar-nav navbar-align">
						<li class="nav-item dropdown">
							<a class="nav-icon dropdown-toggle" href="#" id="alertsDropdown" data-bs-toggle="dropdown">
								<div class="position-relative">
									<i class="align-middle" data-feather="bell"></i>
									<span class="indicator">4</span>
								</div>
							</a>
							<div class="dropdown-menu dropdown-menu-lg dropdown-menu-end py-0" aria-labelledby="alertsDropdown">
								<div class="dropdown-menu-header">
									4 New Notifications
								</div>
								<div class="list-group">
									<a href="#" class="list-group-item">
										<div class="row g-0 align-items-center">
											<div class="col-2">
												<i class="text-danger" data-feather="alert-circle"></i>
											</div>
											<div class="col-10">
												<div class="text-dark">Update completed</div>
												<div class="text-muted small mt-1">Restart server 12 to complete the update.</div>
												<div class="text-muted small mt-1">30m ago</div>
											</div>
										</div>
									</a>
									<a href="#" class="list-group-item">
										<div class="row g-0 align-items-center">
											<div class="col-2">
												<i class="text-warning" data-feather="bell"></i>
											</div>
											<div class="col-10">
												<div class="text-dark">Lorem ipsum</div>
												<div class="text-muted small mt-1">Aliquam ex eros, imperdiet vulputate hendrerit et.</div>
												<div class="text-muted small mt-1">2h ago</div>
											</div>
										</div>
									</a>
									<a href="#" class="list-group-item">
										<div class="row g-0 align-items-center">
											<div class="col-2">
												<i class="text-primary" data-feather="home"></i>
											</div>
											<div class="col-10">
												<div class="text-dark">Login from 192.186.1.8</div>
												<div class="text-muted small mt-1">5h ago</div>
											</div>
										</div>
									</a>
									<a href="#" class="list-group-item">
										<div class="row g-0 align-items-center">
											<div class="col-2">
												<i class="text-success" data-feather="user-plus"></i>
											</div>
											<div class="col-10">
												<div class="text-dark">New connection</div>
												<div class="text-muted small mt-1">Christina accepted your request.</div>
												<div class="text-muted small mt-1">14h ago</div>
											</div>
										</div>
									</a>
								</div>
								<div class="dropdown-menu-footer">
									<a href="#" class="text-muted">Show all notifications</a>
								</div>
							</div>
						</li>
						<li class="nav-item dropdown">
							<a class="nav-icon dropdown-toggle" href="#" id="messagesDropdown" data-bs-toggle="dropdown">
								<div class="position-relative">
									<i class="align-middle" data-feather="message-square"></i>
								</div>
							</a>
							<div class="dropdown-menu dropdown-menu-lg dropdown-menu-end py-0" aria-labelledby="messagesDropdown">
								<div class="dropdown-menu-header">
									<div class="position-relative">
										4 New Messages
									</div>
								</div>
								<div class="list-group">
									<a href="#" class="list-group-item">
										<div class="row g-0 align-items-center">
											<div class="col-2">
												<img src="img/avatars/avatar-5.jpg" class="avatar img-fluid rounded-circle" alt="Vanessa Tucker"/>
											</div>
											<div class="col-10 ps-2">
												<div class="text-dark">Vanessa Tucker</div>
												<div class="text-muted small mt-1">Nam pretium turpis et arcu. Duis arcu tortor.</div>
												<div class="text-muted small mt-1">15m ago</div>
											</div>
										</div>
									</a>
									<a href="#" class="list-group-item">
										<div class="row g-0 align-items-center">
											<div class="col-2">
												<img src="img/avatars/avatar-2.jpg" class="avatar img-fluid rounded-circle" alt="William Harris"/>
											</div>
											<div class="col-10 ps-2">
												<div class="text-dark">William Harris</div>
												<div class="text-muted small mt-1">Curabitur ligula sapien euismod vitae.</div>
												<div class="text-muted small mt-1">2h ago</div>
											</div>
										</div>
									</a>
									<a href="#" class="list-group-item">
										<div class="row g-0 align-items-center">
											<div class="col-2">
												<img src="img/avatars/avatar-4.jpg" class="avatar img-fluid rounded-circle" alt="Christina Mason"/>
											</div>
											<div class="col-10 ps-2">
												<div class="text-dark">Christina Mason</div>
												<div class="text-muted small mt-1">Pellentesque auctor neque nec urna.</div>
												<div class="text-muted small mt-1">4h ago</div>
											</div>
										</div>
									</a>
									<a href="#" class="list-group-item">
										<div class="row g-0 align-items-center">
											<div class="col-2">
												<img src="img/avatars/avatar-3.jpg" class="avatar img-fluid rounded-circle" alt="Sharon Lessman"/>
											</div>
											<div class="col-10 ps-2">
												<div class="text-dark">Sharon Lessman</div>
												<div class="text-muted small mt-1">Aenean tellus metus, bibendum sed, posuere ac, mattis non.</div>
												<div class="text-muted small mt-1">5h ago</div>
											</div>
										</div>
									</a>
								</div>
								<div class="dropdown-menu-footer">
									<a href="#" class="text-muted">Show all messages</a>
								</div>
							</div>
						</li>
						<li class="nav-item dropdown">
							<a class="nav-icon dropdown-toggle d-inline-block d-sm-none" href="#" data-bs-toggle="dropdown">
                <i class="align-middle" data-feather="settings"></i>
              </a>

							<a class="nav-link dropdown-toggle d-none d-sm-inline-block" href="#" data-bs-toggle="dropdown">
                <img src="img/avatars/avatar.jpg" class="avatar img-fluid rounded me-1" alt="Charles Hall" /> <span class="text-dark">Charles Hall</span>
              </a>
							<div class="dropdown-menu dropdown-menu-end">
								<a class="dropdown-item" href="pages-profile.html"><i class="align-middle me-1" data-feather="user"></i> Profile</a>
								<a class="dropdown-item" href="#"><i class="align-middle me-1" data-feather="pie-chart"></i> Analytics</a>
								<div class="dropdown-divider"></div>
								<a class="dropdown-item" href="index.html"><i class="align-middle me-1" data-feather="settings"></i> Settings & Privacy</a>
								<a class="dropdown-item" href="#"><i class="align-middle me-1" data-feather="help-circle"></i> Help Center</a>
								<div class="dropdown-divider"></div>
								<a class="dropdown-item" href="#">Log out</a>
							</div>
						</li>
					</ul>
				</div>
			</nav>

			<main class="content">
				<div class="container-fluid p-0">

					<h1 class="h3 mb-3">Blank Page</h1>

					<div class="row">
						<div class="col-12">
							<div class="card">
								<div class="card-header">
									<h5 class="card-title mb-0">Empty card</h5>
								</div>
								<div class="card-body">
								</div>
							</div>
						</div>
					</div>

				</div>
			</main>

			<footer class="footer">
				<div class="container-fluid">
					<div class="row text-muted">
						<div class="col-6 text-start">
							<p class="mb-0">
								<a class="text-muted" href="https://adminkit.io/" target="_blank"><strong>AdminKit</strong></a> - <a class="text-muted" href="https://adminkit.io/" target="_blank"><strong>Bootstrap Admin Template</strong></a>								&copy;
							</p>
						</div>
						<div class="col-6 text-end">
							<ul class="list-inline">
								<li class="list-inline-item">
									<a class="text-muted" href="https://adminkit.io/" target="_blank">Support</a>
								</li>
								<li class="list-inline-item">
									<a class="text-muted" href="https://adminkit.io/" target="_blank">Help Center</a>
								</li>
								<li class="list-inline-item">
									<a class="text-muted" href="https://adminkit.io/" target="_blank">Privacy</a>
								</li>
								<li class="list-inline-item">
									<a class="text-muted" href="https://adminkit.io/" target="_blank">Terms</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</footer>
		</div>
	</div>
  )
}

export default PagesBlank
