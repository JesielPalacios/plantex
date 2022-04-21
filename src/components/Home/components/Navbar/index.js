import { Link as LinkRouter } from 'react-router-dom'
import styled from 'styled-components'

export const Navbar = () => {
  const scrollToP = () => {
    const element = document.getElementById('5')
    element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Wrapper>
      <Header>
        <Nav className="container">
          <Logo to="/" className="nav__logo">
            <Icono className="ri-leaf-line nav__logo-icon"></Icono> Plantex
          </Logo>

          <Menu id="nav-menu">
            <List>
              <li >
                <Link href="#home">
                  Home
                </Link>
              </li>
              <li >
                <Link href="#about" >
                  About
                </Link>
              </li>
              <li >
                <Link href="#products" >
                  Products
                </Link>
              </li>
              <li >
                <Link href="#faqs" >
                  FAQs
                </Link>
              </li>
              <li >
                <Link href="#contact" >
                  Contact Us
                </Link>
              </li>
            </List>

            <div className="nav__close" id="nav-close">
              <Icono className="ri-close-line"></Icono>
            </div>
          </Menu>

          <div className="nav__btns">
            {/* <!-- Theme change button --> */}
            <Icono
              className="ri-moon-line change-theme"
              id="theme-button"
            ></Icono>

            <ToggleNav id="nav-toggle">
              <Icono className="ri-menu-line"></Icono>
            </ToggleNav>
          </div>
        </Nav>
      </Header>
      {/* <hr />

      <button onClick={() => scrollToP()}>bottom</button> */}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .container {
    max-width: 968px;
    margin-left: var(--mb-1-5);
    margin-right: var(--mb-1-5);
  }

  .nav__logo,
.nav__toggle,
.nav__close{
  color: var(--title-color);
}

`

const Header = styled.header`
  width: 100%;
  background-color: var(--body-color);
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--z-fixed);
  transition: 0.4s; /*For animation dark mode*/
`

const Nav = styled.nav`
  height: var(--header-height);
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled(LinkRouter)`
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: -1px;
  display: inline-flex;
  align-items: center;
  column-gap: 0.5rem;
  transition: 0.3s;

  :hover {
    color: var(--first-color);
  }
`

const Icono = styled.i`
  font-size: 1.15rem;
  color: var(--first-color);
`

const ToggleNav = styled.div`
  font-size: 1.15rem;
  color: var(--first-color);
`
const Menu = styled.div`
  @media screen and (max-width: 767px) {
    position: fixed;
    background-color: var(--container-color);
    width: 80%;
    height: 100%;
    top: 0;
    right: -100%;
    box-shadow: -2px 0 4px hsla(var(--hue), 24%, 15%, 0.1);
    padding: 4rem 0 0 3rem;
    border-radius: 1rem 0 0 1rem;
    transition: 0.3s;
    z-index: var(--z-fixed);
  }
`

const List = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
`

const Link = styled.a`
  color: var(--title-color);
  font-weight: var(--font-medium);
  transition: 0.3s;

  :hover {
    color: var(--first-color);
  }

  /* &.active { */
  &[aria-current] {
    position: relative;
    color: var(--first-color);
  }

  &[aria-current]::after {
    content: '';
  position: absolute;
  bottom: -.5rem;
  left: 0;
  width: 50%;
  height: 2px;
  background-color: var(--first-color);
  }
`


// Quedé por configurar la lógica de cuando se encuentra en un id de un elemento para la localización del smooth scroll
