import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai';
import Offcanvas from "react-bootstrap/Offcanvas";
import {LuShoppingCart } from 'react-icons/lu';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Badge } from "antd";
import { IoIosSearch } from "react-icons/io";
import { IoIosHeartEmpty } from "react-icons/io";
import { GoPerson } from "react-icons/go";
import { RxPerson} from "react-icons/rx";

const Navigation_Bar = () => {
  return (
    <div className="p-2">
      

      

    <Navbar collapseOnSelect expand="lg"  className="bg-white  drop-shadow-sm" >
      <Container className=''>
        <Navbar.Brand href="/">
          <img src="https://ik.imagekit.io/p2slevyg1/e54ead5d-cee6-45c4-8fef-7845d6baf6f3.jpg?updatedAt=1701784899295"  width={150}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto text-sm gap-5 font-sans">
            <Link to="#" className='no-underline text-dark hover:text-amber-500 relative'>HOME <span className='absolute text-secondary hidden md:block' style={{marginTop:-21, marginLeft:60}}>|</span> </Link>
            <Link to="#" className='no-underline text-dark hover:text-amber-500 relative'>MENU <span className='absolute text-secondary hidden md:block' style={{marginTop:-21, marginLeft:60}}>|</span> </Link>
            <Link to="#" className='no-underline text-dark hover:text-amber-500 relative'>BLOG <span className='absolute text-secondary hidden md:block' style={{marginTop:-21, marginLeft:60}}>|</span> </Link>
            <Link to="#" className='no-underline text-dark hover:text-amber-500 relative'>CONTACT US  </Link>
  
         
          </Nav>
          <Nav className=' gap-3'>
            <h6 className='text-2xl md:block hidden text-secondary'><IoIosSearch /></h6>
            <Badge
                    count="0"
                    color="#E57C35"
                    showZero
                    className='md:block hidden'
                    
                  >
            <span className='text-2xl md:block hidden text-secondary'><LuShoppingCart /></span></Badge>
            <h6 className='text-2xl md:block hidden text-secondary'><AiOutlineUser /></h6>
            
          
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>








    </div>
  
  )
}

export default Navigation_Bar
