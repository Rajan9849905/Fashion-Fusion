import { useNavigate } from "react-router-dom";
import { BiCart, BiLogIn } from "react-icons/bi"
import Stack from 'react-bootstrap/Stack';
import {Badge,Button} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function ENavbar() {
  return (
    <Navbar >
      <Container fluid>
        <Navbar.Brand href="/">Fashion Fusion</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
                  <Nav className="me-auto">
            <Nav.Link href="/products">Proudcts</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav> 
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <stack direction="horizontal" gap={3} className="pl-2">
            <a className="btn-btn-light pl-2" href="/cart">
              <BiCart />
              &nbsp;
       <Badge bg="secondary">9</Badge>
       
            </a>
            <Button variant="light">
              <BiLogIn />
       
    </Button>
            
          
          </stack>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ENavbar;