import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const UiForms = () => {
    return (
        <div className="wrapper">
          
          <Navbar/>
            <div className="main">
                <nav className="navbar navbar-expand navbar-light navbar-bg">
                    <a className="sidebar-toggle js-sidebar-toggle">
                        <i className="hamburger align-self-center"></i>
                    </a>

                    <div className="navbar-collapse collapse">
                        <ul className="navbar-nav navbar-align">
                            <li className="nav-item dropdown">
                                <a className="nav-icon dropdown-toggle" href="#" id="alertsDropdown" data-bs-toggle="dropdown">
                                    <div className="position-relative">
                                        <i className="align-middle" data-feather="bell"></i>
                                        <span className="indicator">4</span>
                                    </div>
                                </a>
                                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end py-0" aria-labelledby="alertsDropdown">
                                    <div className="dropdown-menu-header">
                                        4 New Notifications
                                    </div>
                                    <div className="list-group">
                                        <a href="#" className="list-group-item">
                                            <div className="row g-0 align-items-center">
                                                <div className="col-2">
                                                    <i className="text-danger" data-feather="alert-circle"></i>
                                                </div>
                                                <div className="col-10">
                                                    <div className="text-dark">Update completed</div>
                                                    <div className="text-muted small mt-1">Restart server 12 to complete the update.</div>
                                                    <div className="text-muted small mt-1">30m ago</div>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="#" className="list-group-item">
                                            <div className="row g-0 align-items-center">
                                                <div className="col-2">
                                                    <i className="text-warning" data-feather="bell"></i>
                                                </div>
                                                <div className="col-10">
                                                    <div className="text-dark">Lorem ipsum</div>
                                                    <div className="text-muted small mt-1">Aliquam ex eros, imperdiet vulputate hendrerit et.</div>
                                                    <div className="text-muted small mt-1">2h ago</div>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="#" className="list-group-item">
                                            <div className="row g-0 align-items-center">
                                                <div className="col-2">
                                                    <i className="text-primary" data-feather="home"></i>
                                                </div>
                                                <div className="col-10">
                                                    <div className="text-dark">Login from 192.186.1.8</div>
                                                    <div className="text-muted small mt-1">5h ago</div>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="#" className="list-group-item">
                                            <div className="row g-0 align-items-center">
                                                <div className="col-2">
                                                    <i className="text-success" data-feather="user-plus"></i>
                                                </div>
                                                <div className="col-10">
                                                    <div className="text-dark">New connection</div>
                                                    <div className="text-muted small mt-1">Christina accepted your request.</div>
                                                    <div className="text-muted small mt-1">14h ago</div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="dropdown-menu-footer">
                                        <a href="#" className="text-muted">Show all notifications</a>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-icon dropdown-toggle" href="#" id="messagesDropdown" data-bs-toggle="dropdown">
                                    <div className="position-relative">
                                        <i className="align-middle" data-feather="message-square"></i>
                                    </div>
                                </a>
                                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end py-0" aria-labelledby="messagesDropdown">
                                    <div className="dropdown-menu-header">
                                        <div className="position-relative">
                                            4 New Messages
                                        </div>
                                    </div>
                                    <div className="list-group">
                                        <a href="#" className="list-group-item">
                                            <div className="row g-0 align-items-center">
                                                <div className="col-2">
                                                    <img src="img/avatars/avatar-5.jpg" className="avatar img-fluid rounded-circle" alt="Vanessa Tucker" />
                                                </div>
                                                <div className="col-10 ps-2">
                                                    <div className="text-dark">Vanessa Tucker</div>
                                                    <div className="text-muted small mt-1">Nam pretium turpis et arcu. Duis arcu tortor.</div>
                                                    <div className="text-muted small mt-1">15m ago</div>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="#" className="list-group-item">
                                            <div className="row g-0 align-items-center">
                                                <div className="col-2">
                                                    <img src="img/avatars/avatar-2.jpg" className="avatar img-fluid rounded-circle" alt="William Harris" />
                                                </div>
                                                <div className="col-10 ps-2">
                                                    <div className="text-dark">William Harris</div>
                                                    <div className="text-muted small mt-1">Curabitur ligula sapien euismod vitae.</div>
                                                    <div className="text-muted small mt-1">2h ago</div>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="#" className="list-group-item">
                                            <div className="row g-0 align-items-center">
                                                <div className="col-2">
                                                    <img src="img/avatars/avatar-4.jpg" className="avatar img-fluid rounded-circle" alt="Christina Mason" />
                                                </div>
                                                <div className="col-10 ps-2">
                                                    <div className="text-dark">Christina Mason</div>
                                                    <div className="text-muted small mt-1">Pellentesque auctor neque nec urna.</div>
                                                    <div className="text-muted small mt-1">4h ago</div>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="#" className="list-group-item">
                                            <div className="row g-0 align-items-center">
                                                <div className="col-2">
                                                    <img src="img/avatars/avatar-3.jpg" className="avatar img-fluid rounded-circle" alt="Sharon Lessman" />
                                                </div>
                                                <div className="col-10 ps-2">
                                                    <div className="text-dark">Sharon Lessman</div>
                                                    <div className="text-muted small mt-1">Aenean tellus metus, bibendum sed, posuere ac, mattis non.</div>
                                                    <div className="text-muted small mt-1">5h ago</div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="dropdown-menu-footer">
                                        <a href="#" className="text-muted">Show all messages</a>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-icon dropdown-toggle d-inline-block d-sm-none" href="#" data-bs-toggle="dropdown">
                                    <i className="align-middle" data-feather="settings"></i>
                                </a>

                                <a className="nav-link dropdown-toggle d-none d-sm-inline-block" href="#" data-bs-toggle="dropdown">
                                    <img src="img/avatars/avatar.jpg" className="avatar img-fluid rounded me-1" alt="Charles Hall" /> <span className="text-dark">Charles Hall</span>
                                </a>
                                <div className="dropdown-menu dropdown-menu-end">
                                    <a className="dropdown-item" href="pages-profile.html"><i className="align-middle me-1" data-feather="user"></i> Profile</a>
                                    <a className="dropdown-item" href="#"><i className="align-middle me-1" data-feather="pie-chart"></i> Analytics</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="index.html"><i className="align-middle me-1" data-feather="settings"></i> Settings & Privacy</a>
                                    <a className="dropdown-item" href="#"><i className="align-middle me-1" data-feather="help-circle"></i> Help Center</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Log out</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>

                <main className="content">
                    <div className="container-fluid p-0">

                        <div className="mb-3">
                            <h1 className="h3 d-inline align-middle">Forms</h1>
                            <a className="badge bg-dark text-white ms-2" href="upgrade-to-pro.html">
                                Get more form examples
                            </a>
                        </div>
                        <div className="row">
                            <div className="col-12 col-lg-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h5 className="card-title mb-0">Input</h5>
                                    </div>
                                    <div className="card-body">
                                        <input type="text" className="form-control" placeholder="Input" />
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-header">
                                        <h5 className="card-title mb-0">Textarea</h5>
                                    </div>
                                    <div className="card-body">
                                        <textarea className="form-control" rows="2" placeholder="Textarea"></textarea>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-header">
                                        <h5 className="card-title mb-0">Checkboxes</h5>
                                    </div>
                                    <div className="card-body">
                                        <div>
                                            <label className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" />
                                                <span className="form-check-label">
                                                    Option one is this and that&mdash;be sure to include why it's great
                                                </span>
                                            </label>
                                            <label className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" disabled />
                                                <span className="form-check-label">
                                                    Option two is disabled
                                                </span>
                                            </label>
                                        </div>
                                        <div>
                                            <label className="form-check form-check-inline">
                                                <input className="form-check-input" type="checkbox" value="option1" />
                                                <span className="form-check-label">
                                                    1
                                                </span>
                                            </label>
                                            <label className="form-check form-check-inline">
                                                <input className="form-check-input" type="checkbox" value="option2" />
                                                <span className="form-check-label">
                                                    2
                                                </span>
                                            </label>
                                            <label className="form-check form-check-inline">
                                                <input className="form-check-input" type="checkbox" value="option3" disabled />
                                                <span className="form-check-label">
                                                    3
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-header">
                                        <h5 className="card-title mb-0">Read only</h5>
                                    </div>
                                    <div className="card-body">
                                        <input className="form-control" type="text" placeholder="Readonly input" readonly />
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-lg-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h5 className="card-title mb-0">Radios</h5>
                                    </div>
                                    <div className="card-body">
                                        <div>
                                            <label className="form-check">
                                                <input className="form-check-input" type="radio" value="option1" name="radios-example" checked />
                                                <span className="form-check-label">
                                                    Option one is this and that&mdash;be sure to include why it's great
                                                </span>
                                            </label>
                                            <label className="form-check">
                                                <input className="form-check-input" type="radio" value="option2" name="radios-example" />
                                                <span className="form-check-label">
                                                    Option two can be something else and selecting it will deselect option one
                                                </span>
                                            </label>
                                            <label className="form-check">
                                                <input className="form-check-input" type="radio" value="option3" name="radios-example" disabled />
                                                <span className="form-check-label">
                                                    Option three is disabled
                                                </span>
                                            </label>
                                        </div>
                                        <div>
                                            <label className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inline-radios-example" value="option1" />
                                                <span className="form-check-label">
                                                    1
                                                </span>
                                            </label>
                                            <label className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inline-radios-example" value="option2" />
                                                <span className="form-check-label">
                                                    2
                                                </span>
                                            </label>
                                            <label className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inline-radios-example" value="option3" disabled />
                                                <span className="form-check-label">
                                                    3
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-header">
                                        <h5 className="card-title mb-0">Selects</h5>
                                    </div>
                                    <div className="card-body">
                                        <select className="form-select mb-3">
                                            <option selected>Open this select menu</option>
                                            <option>One</option>
                                            <option>Two</option>
                                            <option>Three</option>
                                        </select>

                                        <select multiple className="form-control">
                                            <option>One</option>
                                            <option>Two</option>
                                            <option>Three</option>
                                            <option>Four</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-header">
                                        <h5 className="card-title mb-0">Disabled</h5>
                                    </div>
                                    <div className="card-body">
                                        <div className="mb-3">
                                            <label className="form-label">Disabled input</label>
                                            <input type="text" className="form-control" placeholder="Disabled input" disabled />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Disabled select menu</label>
                                            <select className="form-control" disabled>
                                                <option>Disabled select</option>
                                            </select>
                                        </div>
                                        <label className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" disabled />
                                            <span className="form-check-label">
                                                Can't check this
                                            </span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </main>

             
                <Footer/>
            </div>
        </div>
    )
}

export default UiForms
