import { Link } from "react-router-dom";

function Navbar() {
    return(
        <>
            <ul id="dropdown1" class="dropdown-content">
                <li><Link to="/">Home</Link>{/* <a href="/">Home</a> */}</li>
                <li><Link to="/desktop">Desktop Apps</Link>{/*<a href="/desktop" class="truncate">Desktop Apps</a>*/}</li>
                <li><Link to="/web">Web Development</Link>{/*<a href="/web" class="truncate">Web Development</a>*/}</li>
            </ul>
            <nav className="blue-grey darken-3">
                <div className="container nav-wrapper blue-grey darken-2">
                    <a href="#" className="brand-logo truncate">John Phillips - Portfolio</a>
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
        </>
    );
};

export default Navbar;