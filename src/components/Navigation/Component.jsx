import React, { useEffect, useState } from 'react';
import { Nav, Navbar, Button, Form } from 'react-bootstrap';
import LoginModal from '../modals/Login';
import SignupModal from '../modals/Signup';

const Component = props => {
    let listener = null;
    const { openStudentLoginModal, openStudentSignupModal } = props;
    const [scrollState, setScrollState] = useState("top");
  
    useEffect(() => {
      // listener = document.addEventListener("scroll", e => {
      //   var scrolled = document.scrollingElement.scrollTop
      //   if (scrolled >= 500) {
      //     if (scrollState !== "fixed") {
      //       setScrollState("fixed")
      //     }
      //   } else {
      //     if (scrollState !== "top") {
      //       setScrollState("top")
      //     }
      //   }
      // })
      // if (scrollState === "top") {
      //   document.getElementById('navbar').classList.remove("fixed");
      // }else {
      //   document.getElementById('navbar').classList.add("fixed");
      // }
      // return () => {
      //   document.removeEventListener("scroll", listener)
      // }
    }, [scrollState]);

    const { page } = props;

    return (
        <Navbar id="navbar" className={(page=='home') ? 'transparent':'white'} expand="lg" >
            <div className="container">
                <Navbar.Brand href="/">
                    <img
                        src="/img/logo.png"
                        className="img-fluid"
                        alt="Hafs logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link className="nav__item" href="/">Home</Nav.Link>
                        <Nav.Link className="nav__item" href="/articles" active={page=="articles"}>Articles</Nav.Link>
                        <Nav.Link className="nav__item" href="/pricing" active={page=="pricing"}>Pricing</Nav.Link>
                        <Nav.Link className="nav__item" href="/games" active={page=="games"}>Games</Nav.Link>
                        <Nav.Link className="nav__item" href="/find-teacher" active={page=="find-teacher"}>Find Teacher</Nav.Link>
                        <Nav.Link className="nav__item" href="/contact-us" active={page=="contact-us"}>Contact Us</Nav.Link>
                    </Nav>
                    <div className="navbar-action">
                        <button className="mr-3" onClick={openStudentLoginModal}>Login</button>
                        <button className="" onClick={openStudentSignupModal}>Sign Up</button>
                    </div>
                </Navbar.Collapse>
            </div>
          <LoginModal />
          <SignupModal />
        </Navbar>
    )
}

export default Component;