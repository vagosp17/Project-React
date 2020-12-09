import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav, NavItem, NavbarBrand} from 'reactstrap';
import {BrowserRouter as Router,  Switch,  Route, NavLink} from "react-router-dom";
import './Header.css';

const Header = () => {
    return (
    
      <Navbar color="dark" dark > 
       <NavbarBrand className="nav-brand"> <NavLink to="/pages/Home">Code.Hub Dashboard</NavLink></NavbarBrand>        
        <Nav className="nav-items">
          <NavLink to="/pages/CoursesPage">Courses</NavLink>
          <NavLink to="/pages/AddNewCourse" >Add new course</NavLink>
        </Nav>
      </Navbar>
      );
    };
   


export default Header;