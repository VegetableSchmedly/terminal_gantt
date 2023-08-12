import { Link } from 'react-router-dom';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
import logo from "../img/logo.png";

const Navigation = () => {

    return(
    <Navbar expand="lg" className="bg-body-tertiary" sticky="top">
      <Container fluid>
          <Navbar.Brand>
            <img
              src= {logo}
              width="75"
              height="75"
              className="logo"
              alt="Terminal Gantt"
            />
          </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='me-auto'>
                        <LinkContainer to="/">
                            <Nav.Link className='pageNav' to="/">
                                Movements
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/gantt">
                            <Nav.Link className='pageNav' to="/gantt">
                                Gantt Chart
                            </Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
        </Container>
    </Navbar>
    )
};


export default Navigation;