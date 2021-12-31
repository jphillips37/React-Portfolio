function Footer() {
    return(
        <footer className="page-footer blue-grey darken-3">
            <div className="container blue-grey darken-2">
                <div className="row">
                    <div className="col center s12">
                    <h6 className="white-text">(440)-231-6261</h6>
                    <h6 className="grey-text text-lighten-4">jphillips37@gmail.com</h6>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container">
                    <div className="row">
                        <div className="col left">
                            <p>Hosted with Heroku.</p>
                        </div>
                        <div className="col right">
                            <a href="https://github.com/jphillips37" target="_blank"><img src="./images/github-logo.png" height="30px" width="30px" /></a>
                            <a href="https://www.linkedin.com/in/john-phillips-8a9b2a44/" target="_blank"><img src="./images/linked-in-logo.png" height="30px" width="30px" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;