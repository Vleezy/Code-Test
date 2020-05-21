import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert } from 'reactstrap';
import Carousel from './Components/Carousels';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  
} from 'reactstrap';


function App() {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);
  return (
    <div>

      <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto">Romero</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <div>
      <Alert color="danger" style={{margin:"0px", borderRadius:"0px", textAlign:"center"}}>
        Beta Mode | Testing Mode
      </Alert>
      </div>
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">Romero's Website</h1>
          <p class="lead">This is me testing out different components and bootstrap.</p>
        </div>
      </div>



    </div>

  );
}
export default App;