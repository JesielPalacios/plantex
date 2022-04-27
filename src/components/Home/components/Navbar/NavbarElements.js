import styled from 'styled-components'
import { Link as LinkScroll } from 'react-scroll'

export const Header = styled.header`
  width: 100%;
  background-color: var(--body-color);
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--z-fixed);
  transition: 0.4s; /*For animation dark mode*/

  ${(darkTheme) =>
    darkTheme
      ? 'box-shadow: 0 1px 4px hsla(var(--hue), 4%, 15%, 0.1);'
      : 'box-shadow: 0 1px 4px hsla(var(--hue), 4%, 4%, 0.3);'}
`
// Miss to fix the shadows in dark mode, this doesn't work yet.
export const Nav = styled.nav`
  height: var(--header-height);
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 767px) {
    height: calc(var(--header-height) + 1.5rem);
    column-gap: 3rem;
  }
`

export const Logo = styled(LinkScroll)`
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: -1px;
  display: inline-flex;
  align-items: center;
  column-gap: 0.5rem;
  transition: 0.3s;
  color: var(--title-color);
  cursor: pointer;

  :hover {
    color: var(--first-color);
  }
`

export const Icono = styled.i`
  font-size: 1.15rem;
  color: var(--first-color);
`

export const Menu = styled.div`
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

  @media screen and (min-width: 767px) {
    margin-left: auto;
  }

  /* ${(menu) => (menu ? 'right: 0;' : '')} */
`

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;

  @media screen and (min-width: 767px) {
    flex-direction: row;
    column-gap: 3rem;
  }
`

// export const Link = styled(LinkScroll)`
export const Link = styled(LinkScroll)`
  color: var(--title-color);
  font-weight: var(--font-medium);
  transition: 0.3s;
  cursor: pointer;

  :hover {
    color: var(--first-color);
  }

  /* Active link */
  &.active {
    /* &[aria-current] { */
    /* &[active-link] { */
    position: relative;
    color: var(--first-color);
  }

  /* &[aria-current]:after { */
  &.active::after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 0;
    width: 50%;
    height: 2px;
    background-color: var(--first-color);
  }
`

export const NavToggle = styled.div`
  color: var(--title-color);
  display: inline-flex;
  font-size: 1.25rem;
  cursor: pointer;

  @media screen and (min-width: 767px) {
    display: none;
  }
`

export const CloseIcon = styled.div`
  color: var(--title-color);
  font-size: 1.5rem;
  position: absolute;
  top: 1rem;
  right: 1.25rem;
  cursor: pointer;

  @media screen and (min-width: 767px) {
    display: none;
  }
`

export const NavBtns = styled.div`
  display: inline-flex;
  align-items: center;
  column-gap: 1rem;
`
