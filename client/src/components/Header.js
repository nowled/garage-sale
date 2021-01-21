import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container, NavLink } from 'react-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar bg='primary' variant='dark' expand='lg'>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>Garage Sale</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <LinkContainer to='/cart'>
                <NavLink>
                  <i className='fas fa-shopping-cart'></i> Cart
                </NavLink>
              </LinkContainer>
              <LinkContainer to='/login'>
                <NavLink>
                  <i className='fas fa-user'></i> Sign In
                </NavLink>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
