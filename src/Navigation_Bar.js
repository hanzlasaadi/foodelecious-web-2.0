import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai';
import { IoIosSearch } from 'react-icons/io';
import {LuShoppingCart } from 'react-icons/lu';

const Navigation_Bar = () => {
  return (
    <div className="p-2 ">
      

      

    <Navbar collapseOnSelect expand="lg" className="bg-white drop-shadow-sm" >
      <Container className=''>
        <Navbar.Brand href="/">
          <img src="https://ik.imagekit.io/p2slevyg1/e54ead5d-cee6-45c4-8fef-7845d6baf6f3.jpg?updatedAt=1701784899295"  width={150}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto text-sm gap-4 font-sans">
            <Link to="#" className='no-underline text-dark hover:text-amber-500'>HOME </Link>|
            <Link to="#"  className='no-underline text-black'>MENU </Link>|
            <Link to="#"  className='no-underline text-black'>BLOG</Link>|
            <Link to="#"  className='no-underline text-black'>CONTACT US</Link>
         
          </Nav>
          <Nav className='md:block hidden gap-3'>
            <h6 className='text-2xl text-secondary'><IoIosSearch /></h6>
            <h6 className='text-2xl text-secondary'><LuShoppingCart /></h6>
            <h6 className='text-2xl text-secondary'><AiOutlineUser /></h6>
          
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>








    </div>
  )
}

export default Navigation_Bar
