import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/logo.png';
import './Navbar.css';

function Navigationbar() {
  return (
    // <Button>TEST</Button>

    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="d-flex justify-content-between my-2 my-lg-0"
            style={{ maxHeight: '100px', width: '100%' }}
            navbarScroll
          >
            <div className='d-flex'>
              <Nav.Link className='d-flex align-items-center mx-2 ' href="#action1">Personal </Nav.Link>
              <Nav.Link className='d-flex align-items-center mx-2 active' href="#action1">SME and Business </Nav.Link>
              <Nav.Link className='d-flex align-items-center mx-2' href="#action1">Corporate & Investment </Nav.Link>
              <Nav.Link className='d-flex align-items-center mx-2' href="#action1">Wealth International </Nav.Link>
            </div>



            <div className='d-flex'>
              <NavDropdown className='d-flex align-items-center mx-2' title="EN" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className='d-flex align-items-center mx-5' href="#" >
                <p className='text-center'>Already Midway<br /><span style={{
                  color: '#fa5822'
                }}>Resume Application?</span></p>

              </Nav.Link>
            </div>
          </Nav>
          <Form>
            <Button className='openbutton'>Open Account</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigationbar;