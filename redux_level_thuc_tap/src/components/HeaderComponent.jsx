import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {useSelector, useDispatch} from 'react-redux';

const HeaderComponent = () => {
  const listUser = useSelector((state) => state.user.listUser)

    return(
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title={`${listUser.length}-User`} id="basic-nav-dropdown">
                {listUser && listUser.length > 0  && listUser.map(user => (
               
                  <>
                  <NavDropdown.Item key={user.id}>{user.username}</NavDropdown.Item>
                  </>
                ))
                
              }
              </NavDropdown>
          
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
   
    )

}
export default HeaderComponent