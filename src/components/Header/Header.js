import Navigation from "./Navigation";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark mb-3">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03"
                    aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand text-light" href="#">Banking Application</a>

            <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarTogglerDemo03">
                <Navigation />
            </div>
            <div>
                <LoginButton />
                <LogoutButton />
            </div>

        </nav>
    );
}

export default Header;
