import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'

const UiTypography = () => {
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
                            <h1 className="h3 d-inline align-middle">Typography</h1>
                            <a className="badge bg-dark text-white ms-2" href="upgrade-to-pro.html">
                                Get more typography examples
                            </a>
                        </div>
                        <div className="row">
                            <div className="col-12 col-lg-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h5 className="card-title">Headings</h5>
                                        <h6 className="card-subtitle text-muted">All HTML headings, <code>&lt;h1&gt;</code> through <code>&lt;h6&gt;</code>, are available.</h6>
                                    </div>
                                    <div className="card-body">
                                        <h1>This is a heading h1</h1>
                                        <p className="text-muted">Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit
                                            vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero.</p>
                                        <h2>This is a heading h2</h2>
                                        <p className="text-muted">Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit
                                            vel, luctus pulvinar, hendrerit id, lorem.</p>
                                        <h3>This is a heading h3</h3>
                                        <p className="text-muted">Etiam rhoncus. Maecenas tempus, tellus condimentum rhoncus, sem quam libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, vel.</p>
                                        <h4>This is a heading h4</h4>
                                        <p className="text-muted">Etiam rhoncus. Maecenas tempus, tellus condimentum rhoncus, sem quam libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, vel.</p>
                                        <h5>This is a heading h5</h5>
                                        <p className="text-muted">Sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel.</p>
                                        <h6>This is a heading h6</h6>
                                        <p className="text-muted">Sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel.</p>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-header">
                                        <h5 className="card-title">Coloured text</h5>
                                        <h6 className="card-subtitle text-muted">Contextual text classes.</h6>
                                    </div>
                                    <div className="card-body">
                                        <p className="text-primary">This line of text contains the text-primary className.</p>
                                        <p className="text-secondary">This line of text contains the text-secondary className.</p>
                                        <p className="text-success">This line of text contains the text-success className.</p>
                                        <p className="text-danger">This line of text contains the text-danger className.</p>
                                        <p className="text-warning">This line of text contains the text-warning className.</p>
                                        <p className="text-info">This line of text contains the text-info className.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h5 className="card-title">Inline text</h5>
                                        <h6 className="card-subtitle text-muted">Styling for common inline HTML5 elements.</h6>
                                    </div>
                                    <div className="card-body">
                                        <p>You can use the mark-tag to <mark>highlight</mark> text.</p>
                                        <p><del>This line of text can be treated as deleted text.</del></p>
                                        <p><ins>This line of text can be treated as an addition to the document.</ins></p>
                                        <p><strong>Bold text using the strong-tag</strong></p>
                                        <p><em>Italicized text using the em-tag</em></p>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-header">
                                        <h5 className="card-title">Blockquotes</h5>
                                        <h6 className="card-subtitle text-muted">For quoting blocks of content from another source within your document.</h6>
                                    </div>
                                    <div className="card-body">
                                        <blockquote>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
                                            </p>
                                            <footer>
                                                Someone famous in <cite title="Source Title">Source Title</cite>
                                            </footer>
                                        </blockquote>
                                        <p className="text-muted m-b-15 m-t-20">
                                            Add <code>.blockquote-reverse</code> for a blockquote with right-aligned content.
                                        </p>
                                        <blockquote className="blockquote-reverse m-b-0">
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
                                            </p>
                                            <footer>
                                                Someone famous in <cite title="Source Title">Source Title</cite>
                                            </footer>
                                        </blockquote>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-header">
                                        <h5 className="card-title">List unordered</h5>
                                        <h6 className="card-subtitle text-muted">The unordered list items will are marked with bullets.</h6>
                                    </div>
                                    <div className="card-body">
                                        <ul>
                                            <li>
                                                Lorem ipsum dolor sit amet
                                            </li>
                                            <li>
                                                Consectetur adipiscing elit
                                            </li>
                                            <li>
                                                Nulla volutpat aliquam velit
                                            </li>
                                            <li>
                                                Phasellus iaculis neque
                                            </li>
                                            <li>
                                                Eget porttitor lorem
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-header">
                                        <h5 className="card-title">List ordered</h5>
                                        <h6 className="card-subtitle text-muted">The ordered list items will are marked with numbers.</h6>
                                    </div>
                                    <div className="card-body">
                                        <ol>
                                            <li>
                                                Lorem ipsum dolor sit amet
                                            </li>
                                            <li>
                                                Consectetur adipiscing elit
                                            </li>
                                            <li>
                                                Nulla volutpat aliquam velit
                                            </li>
                                            <li>
                                                Phasellus iaculis neque
                                            </li>
                                            <li>
                                                Eget porttitor lorem
                                            </li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </main>

                
            </div>
        </div>
    )
}

export default UiTypography
