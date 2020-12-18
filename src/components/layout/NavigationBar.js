import React from "react";
import PropTypes from "prop-types";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

const Navigationbar = ({ auth, username, onClick }) => (
   <Navbar
      bg="dark"
      variant="dark"
      expand="sm"
      className="mb-3"
      style={{ minHeight: "4rem" }}
   >

      <a href="https://www.northeastern.edu/">
        <Navbar.Brand>
            <img
               src="https://web.northeastern.edu/sds/CEWS/images/NEUlogo.png"
               style={{ height: 40, width: 200 }}
               className="d-inline-block align-top"
               alt=""
            />
          {"Covid-19"}
          </ Navbar.Brand>

      </a>

      <Nav className="ml-auto">
        <Link to="/logout">
        <Button variant="outline-light" className="mr-sm-2">
          About Us
        </Button>
         </Link>
         {auth ? (
             <div className="text-white">
            <Link to="/logout">

               <Button
                  variant="outline-light"
                  className="mr-sm-2"
                  onClick={onClick}
               >
                  Logout
               </Button>
            </Link>
               {"Sign in as " + username}
             </div>
         ) : (
            <Link to="/login">
               <Button variant="outline-light" className="mr-sm-2">
                  Login
               </Button>
            </Link>
         )}
      </Nav>
   </Navbar>
);

Navigationbar.propTypes = {
   auth: PropTypes.bool.isRequired,
   onClick: PropTypes.func.isRequired
};

export default Navigationbar;
