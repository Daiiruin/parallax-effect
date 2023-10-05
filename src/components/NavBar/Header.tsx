import { BiSearch } from "react-icons/bi";
import "./Header.css";

export const Header = () => {
  return (
    <header>
      <nav>
        <p className="logo">OURLOGO</p>
        <ul>
          <li>
            <a href="#">Login</a>
          </li>
          <li>
            <a href="#">Sign Up</a>
          </li>
          <li className="search">
            <a href="#">
              <BiSearch size={24} />
            </a>
          </li>
          <li className="hamburger">
            <a href="#">
              <div className="bar" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
