import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState,useRef} from "react";
import {Link} from 'react-scroll'
import Testimonial from './Testimonial';
import Feature from './Feature';
import Component from './Component';
import CarouselComponent from './Carousel';

export default function Navbaar() {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();

  const handleClick = (elmref) => {
    window.scrollTo({ top:elmref.current.offsetTop ,behavior: 'smooth'});
  };

  return (
<>
          <Navbar expand="lg" className="bg-danger px-1 py-4">
            <Navbar.Brand href="#" className='text-light'>
            <img src='https://www.freepnglogos.com/uploads/logo-website-png/logo-website-file-wikt-globe-bullet-svg-wikimedia-commons-19.png' height={50}></img> 
            &nbsp;Register Startup
            </Navbar.Brand>
        
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse>
              <Nav className="ms-auto text-info">
              <Nav.Item className='mx-2'>
                  <Link to="/" className='nav-link'   onClick={(e) => handleClick(ref1)}>Home</Link>
                </Nav.Item>
                <Nav.Item className='mx-2'>
                  <Link to="./About" className='nav-link'  onClick={(e) => handleClick(ref2)} >About</Link>
                </Nav.Item>
                <Nav.Item className='mx-2'>
                  <Link to="./Services" className='nav-link'  onClick={(e) => handleClick(ref3)}>Contact Us</Link>
                </Nav.Item>
      
              </Nav>
            </Navbar.Collapse>
          </Navbar>  
          <CarouselComponent/>
          <div ref={ref1}><Feature></Feature></div>
          <div ref={ref2}><Component></Component></div>
          <div ref={ref3}><Testimonial></Testimonial></div>
          </>
        
        )
  }