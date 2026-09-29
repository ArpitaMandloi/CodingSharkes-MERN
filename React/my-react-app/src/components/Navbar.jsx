import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function BasicExample() {
  return (
    <>
      <style>
        {`
          .my-navbar {
            background-color:white;
            padding: 10px;
          }

          .my-logo {
            font-size: 20px;
            font-weight: bold;
            color: dark blue;
          }

          .my-nav {
            margin-left: auto;
          }

          .my-nav .nav-link {
            color: black;
            font-size: 18px;
            margin: 0 10px;
          }

          .my-nav .nav-link:hover {
            color: gray;
          }
        `}
      </style>

      <Navbar expand="lg" className="my-navbar">
        <Container>
          <Navbar.Brand className="my-logo">
            BRUMMM
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="my-nav">

              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Bhopal
                </NavDropdown.Item>

                <NavDropdown.Item href="#action/3.2">
                 Indore
                </NavDropdown.Item>

                <NavDropdown.Item href="#action/3.3">
                  Mumbai
                </NavDropdown.Item>

                <NavDropdown.Divider />

                <NavDropdown.Item href="#action/3.4">
                 Settings
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#About">About</Nav.Link>
              <Nav.Link href="#service">Service</Nav.Link>
              <Nav.Link href="#faqs">FAQs</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default BasicExample;