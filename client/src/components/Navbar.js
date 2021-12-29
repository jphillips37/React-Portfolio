function Navbar() {
    return(
        <nav className="blue-grey darken-3">
            <div className="container nav-wrapper blue-grey darken-2">
                <a href="#" className="brand-logo truncate">Web Development</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="/">Home</a></li>
                    <li><a href="/desktop">Desktop Apps</a></li>
                    <li className="active"><a href="/web">Web Development</a></li>
                </ul>
                <ul id="nav-mobile" className="right hide-on-large-only">
                    <li><a className="dropdown-trigger" href="#!" data-target="dropdown1"><i className="material-icons right">dehaze</i></a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;