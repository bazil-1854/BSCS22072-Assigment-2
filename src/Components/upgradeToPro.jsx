import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'

const UpgradeToPro = () => {
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

                        <h1 className="h3 mb-3">Upgrade to Pro</h1>

                        <div className="row">
                            <div className="col-12 col-md-11 col-lg-10 col-xl-8 col-xxl-6 mx-auto">
                                <div className="card">
                                    <img className="card-img-top" src="https://assets.adminkit.io/banners/adminkit-bootstrap-5-admin-template-social-preview.png" alt="AdminKit - Free & Premium Bootstrap 5 Admin Template" />
                                    <div className="card-header">
                                        <h5 className="card-title">AdminKit PRO</h5>
                                        <h6 className="card-subtitle text-muted">Looking for more components and customizations? Check out our premium version. </h6>
                                    </div>
                                    <div className="card-body">
                                        <div className="table-responsive table-upgrade">
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th></th>
                                                        <th className="text-center">Basic</th>
                                                        <th className="text-center">Pro</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="text-center"></td>
                                                        <td className="text-center">
                                                            <a target="_blank" href="https://adminkit.io/" className="btn btn-light">Download</a>
                                                        </td>
                                                        <td className="text-center">
                                                            <a target="_blank" href="https://adminkit.io/pricing" className="btn btn-primary">Upgrade to Pro</a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Demo Pages</td>
                                                        <td className="text-center">15</td>
                                                        <td className="text-center"><strong>45+</strong></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Plugins</td>
                                                        <td className="text-center">1</td>
                                                        <td className="text-center"><strong>10+</strong></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Color Schemes</td>
                                                        <td className="text-center">1</td>
                                                        <td className="text-center"><strong>3</strong></td>
                                                    </tr>
                                                    <tr>
                                                        <td>All Bootstrap 5 Components</td>
                                                        <td className="text-center"><span role="img" aria-label="no">❌</span></td>
                                                        <td className="text-center"><span role="img" aria-label="yes">✔</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Dark Mode 🌙</td>
                                                        <td className="text-center"><span role="img" aria-label="no">❌</span></td>
                                                        <td className="text-center"><span role="img" aria-label="yes">✔</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Compact Sidebar</td>
                                                        <td className="text-center"><span role="img" aria-label="no">❌</span></td>
                                                        <td className="text-center"><span role="img" aria-label="yes">✔</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Calendar</td>
                                                        <td className="text-center"><span role="img" aria-label="no">❌</span></td>
                                                        <td className="text-center"><span role="img" aria-label="yes">✔</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Advanced Forms</td>
                                                        <td className="text-center"><span role="img" aria-label="no">❌</span></td>
                                                        <td className="text-center"><span role="img" aria-label="yes">✔</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Drag and Drop</td>
                                                        <td className="text-center"><span role="img" aria-label="no">❌</span></td>
                                                        <td className="text-center"><span role="img" aria-label="yes">✔</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Toast Notifications</td>
                                                        <td className="text-center"><span role="img" aria-label="no">❌</span></td>
                                                        <td className="text-center"><span role="img" aria-label="yes">✔</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td>WYSIWYG Editors</td>
                                                        <td className="text-center"><span role="img" aria-label="no">❌</span></td>
                                                        <td className="text-center"><span role="img" aria-label="yes">✔</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Premium Support</td>
                                                        <td className="text-center"><span role="img" aria-label="no">❌</span></td>
                                                        <td className="text-center"><span role="img" aria-label="yes">✔</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td className="text-center">Free</td>
                                                        <td className="text-center">Starting from $59</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-center"></td>
                                                        <td className="text-center">
                                                            <a target="_blank" href="https://adminkit.io/" className="btn btn-light">Download</a>
                                                        </td>
                                                        <td className="text-center">
                                                            <a target="_blank" href="https://adminkit.io/pricing" className="btn btn-primary">Upgrade to Pro</a>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

                <footer className="footer">
                    <div className="container-fluid">
                        <div className="row text-muted">
                            <div className="col-6 text-start">
                                <p className="mb-0">
                                    <a className="text-muted" href="https://adminkit.io/" target="_blank"><strong>AdminKit</strong></a> - <a className="text-muted" href="https://adminkit.io/" target="_blank"><strong>Bootstrap Admin Template</strong></a>								&copy;
                                </p>
                            </div>
                            <div className="col-6 text-end">
                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                        <a className="text-muted" href="https://adminkit.io/" target="_blank">Support</a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className="text-muted" href="https://adminkit.io/" target="_blank">Help Center</a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className="text-muted" href="https://adminkit.io/" target="_blank">Privacy</a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className="text-muted" href="https://adminkit.io/" target="_blank">Terms</a>
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

export default UpgradeToPro
