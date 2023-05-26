import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="header-container">
    <div className="logo-and-title-container">
      <img
        alt="wave"
        className="logo"
        src="https://res.cloudinary.com/dyivs1j8u/image/upload/v1685096558/how9ohhsdwxk5do7autf.png"
      />
    </div>
    <ul className="nav-items-list">
      <li className="link-item">
        <Link className="route-link" to="/">
          Home
        </Link>
        <Link className="route-link" to="/contact">
          Contact
        </Link>
        <Link className="route-link" to="/about">
          About
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
