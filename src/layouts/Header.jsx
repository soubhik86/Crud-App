import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { profilePic } from "../Api/Endpoint";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/slices/authSlice";

export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = localStorage.getItem("name");
  const proImg = localStorage.getItem("proimg");
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    dispatch(logout());
    navigate("/signin");
  };

  return (
    <div>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand href="#">WTS Academy</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link className="text-white" href="/">Home</Nav.Link>
              {token && (
                <>
                <Nav.Link className="text-white"  href="/createproduct">Create Product</Nav.Link>
                  <Nav.Link className="text-white"  href="/productlist">Product List</Nav.Link>
                  <Nav.Link className="text-white" >{user}</Nav.Link>
                  <img
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      cursor: "pointer",
                      objectFit: "cover",
                    }}
                    src={proImg ? profilePic(proImg) : "error"}
                    alt="Profile"
                    className="profile-img"
                  />
                  <NavDropdown  title="Profile"   className="text-white" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">
                      Profile Info
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5" onClick={handleLogout}>
                      Log Out
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
