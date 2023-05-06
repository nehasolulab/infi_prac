import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { navLink } from "./NavLink";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <Navbar
        expand="lg"
        variant="light"
        bg="primary"
        className="d-flex px-5 py-3"
      >
        {/* <Navbar.Brand href="#">Navbar</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto nav_link">
            {navLink.map((link) => (
              <Link to={link.to} className="">
                {link.name}
              </Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
