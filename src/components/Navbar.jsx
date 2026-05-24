import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo-area">
        <div className="logo-box">N</div>
        <h2>Nexus CRM</h2>
      </div>

      <nav className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/customer-form">Customer Form</NavLink>
        <NavLink to="/leads">Leads</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>

      <div className="auth-buttons">
        <button className="login-btn">Login</button>
        <button className="register-btn">Register</button>
      </div>
    </header>
  );
}

export default Navbar;