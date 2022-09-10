import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link, NavLink, useLocation } from 'react-router-dom';

const TopNavbar = () => {
  const location = useLocation();
  const data = useSelector((state)=>state.proReducer);
  return (
        <>
       
          {/* <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand to="/">React</Navbar.Brand>
              <Nav  className="me-auto">
                <Link  to="/home">Home</Link>
                <div style={{width:30}}> </div>
                <Link to="/cart">Cart</Link>
               
              </Nav>
            </Container>
          </Navbar> */}

<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" to="/">React</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <NavLink className="nav-link" aria-current="page" to="/home">Home</NavLink>
        <NavLink className="nav-link" to="/cart">cart</NavLink>
       
      </div>
    </div>
  </div>
</nav>
        
        </>
      );
    
  
}

export default TopNavbar