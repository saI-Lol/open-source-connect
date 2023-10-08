import logo from "../assets/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <header className="d-flex align-items-center py-3  justify-content-between bg-light">
      {/* Logo */}
      <div className="ps-5">
        {/* <img src={logo} alt="Logo" /> */}
        <i className="bi bi-opencollective fs-1 "></i>
        <span className="fs-4 ps-2">Open Source Connect</span>
      </div>

      {/* Navigation */}
      <nav className="pt-4">
        <ul className="d-flex">
          <li className="me-3 ">
            <a href="#">All Projects</a>
          </li>
          <li className="me-3 ">
            <a href="#">Recommended Projects</a>
          </li>
          <li className="me-3 ">
            <a href="#">Creators</a>
          </li>
        </ul>
      </nav>

      {/* User Section */}
      <div className="user-section d-flex me-5">
      
        

        {/* Notifications */}
        <div className="notifications me-4 fs-4 text-secondary">
          <i className="bi bi-bell"></i>
        </div>

        {/* User Information */}
        <div className="user-info fs-4 text-secondary">
          <i className="bi bi-person-circle"></i>
        </div>
      </div>
    </header>
  );
};

export default Header;
