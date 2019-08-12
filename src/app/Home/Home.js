import React, {Component} from 'react';
import { Navbar, Nav, Dropdown, Collapse } from 'bootstrap-4-react';

class Home extends Component {
  render(){
    return (
      <Navbar expand="lg" light bg="light">
        <Navbar.Brand href="#">
          Aplicación
        </Navbar.Brand>
        <Navbar.Toggler target="#navbarSupportedContent" />
        <Collapse navbar id="navbarSupportedContent">
          <Navbar.Nav mr="auto">
            <Nav.Item active>
              <Nav.Link href="#">Inicio</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#">Miembros</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#">Estacas</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#">Barrios</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#">Ciudades</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#">Asistencias</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#">Evaluaciones</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#">Reportes</Nav.Link>
            </Nav.Item>
            <Nav.Item dropdown>
              <Nav.Link dropdownToggle>Asistencias</Nav.Link>
              <Dropdown.Menu>
                <Dropdown.Item>Libro de Asistencias</Dropdown.Item>
                <Dropdown.Item>Another action</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Nav.Item>
          </Navbar.Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default Home