import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav, NavbarBrand} from 'reactstrap';
import {NavLink,Link} from "react-router-dom";
import './Header.css';

const Header = () => {
    return (
    
      <Navbar color="dark" dark > 
       <NavbarBrand className="nav-brand"> <Link to="/Home">Code.Hub Dashboard</Link></NavbarBrand>        
        <Nav className="nav-items">
          <NavLink to="/CoursesPage">Courses</NavLink>
          <NavLink to="/AddNewCourse" >Add new course</NavLink>
        </Nav>
      </Navbar>
      );
    };
   


export default Header;