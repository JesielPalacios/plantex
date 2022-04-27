import { useState } from 'react'
import { routes } from '../../../../core/router/routes'
import {
  CloseIcon,
  Header,
  Icono,
  Link,
  List,
  Logo,
  Menu,
  Nav,
  NavBtns,
  NavToggle
} from './NavbarElements'

export const Navbar = ({ darkTheme, showDarkTheme }) => {
  const [menu, setMenu] = useState(false)
  const showMenu = () => setMenu(!menu)

  return (
    <Header darkTheme={darkTheme}>
      <Nav className="container">
        <Logo to="home" smooth={true} duration={500} spy={true} exact="true">
          <Icono className="ri-leaf-line"></Icono> Plantex
        </Logo>

        <Menu className={menu ? 'show-menu' : ''} id="menu" menu={menu}>
          <List>
            {routes.map(({ path, title }, index) => {
              return (
                <Link
                  key={index}
                  to={path}
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={0}
                >
                  {title}
                </Link>
              )
            })}
          </List>

          <CloseIcon onClick={showMenu}>
            <i className="ri-close-line"></i>
          </CloseIcon>
        </Menu>

        <NavBtns>
          <i
            className={
              darkTheme
                ? 'ri-moon-line change-theme ri-sun-line'
                : 'ri-moon-line change-theme'
            }
            onClick={showDarkTheme}
          ></i>

          <NavToggle onClick={showMenu}>
            <i className="ri-menu-line"></i>
          </NavToggle>
        </NavBtns>
      </Nav>
    </Header>
  )
}
