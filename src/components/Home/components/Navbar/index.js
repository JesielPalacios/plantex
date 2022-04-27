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
  // export const scrollToP = () => {
  //   export const element = document.getElementById('5')
  //   element.scrollIntoView({ behavior: 'smooth' })
  // }

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
          {/* <!-- Theme change button --> */}
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

export const QuestionsContainer = () => {
  return (
    <div className="questions__container container grid">
      <div className="questions__group">
        <div className="questions__item">
          <header className="questions__header">
            <i className="ri-add-line questions__icon"></i>
            <h3 className="questions__item-title">
              My flowers are falling off or dying?
            </h3>
          </header>

          <div className="questions__content">
            <p className="questions__description">
              Plants are easy way to add color energy and transform your space
              but which planet is for you. Choosing the right plant.
            </p>
          </div>
        </div>

        <div className="questions__item">
          <header className="questions__header">
            <i className="ri-add-line questions__icon"></i>
            <h3 className="questions__item-title">
              What causes leaves to become pale?
            </h3>
          </header>

          <div className="questions__content">
            <p className="questions__description">
              Plants are easy way to add color energy and transform your space
              but which planet is for you. Choosing the right plant.
            </p>
          </div>
        </div>

        <div className="questions__item">
          <header className="questions__header">
            <i className="ri-add-line questions__icon"></i>
            <h3 className="questions__item-title">
              What causes brown crispy leaves?
            </h3>
          </header>

          <div className="questions__content">
            <p className="questions__description">
              Plants are easy way to add color energy and transform your space
              but which planet is for you. Choosing the right plant.
            </p>
          </div>
        </div>
      </div>

      <div className="questions__group">
        <div className="questions__item">
          <header className="questions__header">
            <i className="ri-add-line questions__icon"></i>
            <h3 className="questions__item-title">How do i choose a plant?</h3>
          </header>

          <div className="questions__content">
            <p className="questions__description">
              Plants are easy way to add color energy and transform your space
              but which planet is for you. Choosing the right plant.
            </p>
          </div>
        </div>

        <div className="questions__item">
          <header className="questions__header">
            <i className="ri-add-line questions__icon"></i>
            <h3 className="questions__item-title">How do I change the pots?</h3>
          </header>

          <div className="questions__content">
            <p className="questions__description">
              Plants are easy way to add color energy and transform your space
              but which planet is for you. Choosing the right plant.
            </p>
          </div>
        </div>

        <div className="questions__item">
          <header className="questions__header">
            <i className="ri-add-line questions__icon"></i>
            <h3 className="questions__item-title">
              Why are gnats flying around my plant?
            </h3>
          </header>

          <div className="questions__content">
            <p className="questions__description">
              Plants are easy way to add color energy and transform your space
              but which planet is for you. Choosing the right plant.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export const Sections = styled.div`
  @media screen and (min-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const WrapperQuestions = styled.div`
  gap: 1.5rem;
  padding: 1.5rem 0;

  @media screen and (min-width: 767px) {
    align-items: flex-start;
  }

  @media screen and (min-width: 992px) {
    padding: 1rem 0 4rem;
  }
`
