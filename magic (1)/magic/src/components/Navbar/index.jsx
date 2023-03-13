import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { BiSearchAlt2 } from "react-icons/bi";

import "./style.css";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(search);
    if (!search) return;
    navigate(`/search?q=${search}`);
    setSearch("");
  };

  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <Link to="/cards" className="navbar-brand">
          Sol Ring
        </Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Random
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cards" className="nav-link">
                Cards
              </Link>
            </li>
          </ul>
          <form className="d-flex" onSubmit={handleSubmit} role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Pesquisar"
              aria-label="Search"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
            <button className="btn btn-outline-secondary" type="submit">
              <BiSearchAlt2 />
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
