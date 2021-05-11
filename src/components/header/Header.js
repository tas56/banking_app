import Navigation from "./Navigation";
import AuthenticationButton from "./AuthenticationButton";
const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark mb-3">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03"
                    aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand text-light" href="#">Banking Application</a>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                <div className="w-100 d-flex justify-content-between">
                    <Navigation />
                    <AuthenticationButton />
                </div>
            </div>

        </nav>
    );
}

export default Header;
