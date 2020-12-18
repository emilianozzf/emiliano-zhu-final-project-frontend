import React from "react";
import PropTypes from "prop-types";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css"
import "./NavBar.css"

const Navigationbar = ({ auth, username, onClick }) => (
    // <nav className="navbar navbar-default"
    //      style={{background: "black", border: "none", borderRadius: "0px"}}>
    //    <div className="container-fluid">
    //       <div className="container">
    //          <div className="navbar-header">
    //             <button type="button" className="navbar-toggle collapsed"
    //                     data-toggle="collapse"
    //                     data-target="#bs-nav-demo" aria-expanded="false">
    //                <span className="sr-only">Toggle navigation</span>
    //                <span className="icon-bar"></span>
    //                <span className="icon-bar"></span>
    //                <span className="icon-bar"></span>
    //             </button>
    //             {/*<a href="/#" className="navbar-brand">*/}
    //             {/*  <img alt="Brand"*/}
    //             {/*       src="https://web.northeastern.edu/sds/CEWS/images/NEUlogo.png"*/}
    //             {/*       style={{height: "100%"}}/>*/}
    //             {/*</a>*/}
    //             <img className="navbar-brand"
    //                  alt="Brand"
    //                  src="https://web.northeastern.edu/sds/CEWS/images/NEUlogo.png"
    //             />
    //             <Link className="navbar-brand" id="home" to="/" style={{
    //                color: "rgba(240, 248, 255, 0.8)",
    //                hover: {
    //                   color: "white"
    //                }
    //             }}>Covid-19</Link>
    //          </div>
    //
    //          <div className="collapse navbar-collapse" id="bs-nav-demo">
    //             <ul className="nav navbar-nav navbar-right">
    //                <li>
    //                   <Link to="/about_us" style={{
    //                      color: "rgba(240, 248, 255, 0.8)",
    //                      $nest: {
    //                         '&:hover': {
    //                            color: "rgba(240, 248, 255, 1)",
    //                            borderBottom: "1px solid red",
    //                            marginBottom: "1px"
    //                         }
    //                      }
    //                   }}>About Us</Link>
    //                </li>
    //                <li>
    //                   <Link to="/sign_up" style={{
    //                      color: "rgba(240, 248, 255, 0.8)",
    //                      $nest: {
    //                         '&:hover': {
    //                            color: "rgba(240, 248, 255, 1)",
    //                            borderBottom: "1px solid red",
    //                            marginBottom: "1px"
    //                         }
    //                      }
    //                   }}>Sign Up</Link>
    //                </li>
    //                <li>
    //                   <Link to="/login" style={{
    //                      color: "rgba(240, 248, 255, 0.8)",
    //                      $nest: {
    //                         '&:hover': {
    //                            color: "rgba(240, 248, 255, 1)",
    //                            borderBottom: "1px solid red",
    //                            marginBottom: "1px"
    //                         }
    //                      }
    //                   }}>Login</Link>
    //                </li>
    //             </ul>
    //          </div>
    //
    //       </div>
    //    </div>
    // </nav>


   <Navbar
       collapseOnSelect expand="lg"
       variant="dark"
      // expand="sm"
      // style={{ minHeight: "4rem" }}
      style={{background: "black", border: "none", borderRadius: "0px"}}
   >

      <a href="https://www.northeastern.edu/">
        <Navbar.Brand>
            <img
               src="https://web.northeastern.edu/sds/CEWS/images/NEUlogo.png"
               style={{ height: 40, width: 250 }}
               className="d-inline-block align-center"
               alt=""
            />
          </ Navbar.Brand>
         <Link className="navbar-brand pt-3" id="home" to="/" style={{
                           color: "rgba(240, 248, 255, 0.8)",
                           hover: {
                              color: "white"
                           }
                        }}>Covid-19</Link>

      </a>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" variant="outline-success"/>

      <Navbar.Collapse id="responsive-navbar-nav">
         <Nav className="ml-auto d-flex mt-3">

            {/*<ul style={{listStyleType:"none"}}>*/}
           <Link to="/logout">
           <p variant="outline-light" className="mr-sm-2"
               style={{
                  color: "rgba(240, 248, 255, 0.8)",
                  $nest: {
                     '&:hover': {
                        color: "rgba(240, 248, 255, 1)",
                        borderBottom: "1px solid red",
                        marginBottom: "1px"
                     }
                  }
               }}>
             About Us |
           </p>
            </Link>
            {auth ? (

               <Link to="/logout">
                  <p
                     // variant="outline-light"
                     className="mr-sm-2"
                     onClick={onClick}
                     style={{
                              color: "rgba(240, 248, 255, 0.8)",
                              $nest: {
                                 '&:hover': {
                                    color: "rgba(240, 248, 255, 1)",
                                    borderBottom: "1px solid red",
                                    marginBottom: "1px"
                                 }
                              }
                           }}
                  >
                     Logout |
                  </p>
               </Link>


            ) : (
               <Link to="/login">
                  <p variant="outline-light" className="mr-sm-2"
                      style={{
                         color: "rgba(240, 248, 255, 0.8)",
                         $nest: {
                            '&:hover': {
                               color: "rgba(240, 248, 255, 1)",
                               borderBottom: "1px solid red",
                               marginBottom: "1px"
                            }
                         }
                      }}>

                     Login |
                  </p>

               </Link>

            )}
            {/*</ul>*/}
            {auth ? (
                <div style={{
                   color: "white"}}>{"Sign in as " + username}</div>
            ):""}
         </Nav>
      </Navbar.Collapse>
   </Navbar>
);

Navigationbar.propTypes = {
   auth: PropTypes.bool.isRequired,
   onClick: PropTypes.func.isRequired
};

export default Navigationbar;
