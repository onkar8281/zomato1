import HeroSection from "./HeroSection";

function Navbar() {
  return (
    <div className="navbar-main">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Investers Relations
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Add Restaurant
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Log In
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Sign Up
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <HeroSection />
    </div>
  );
}

export default Navbar;
