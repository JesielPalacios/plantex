import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
/*=============== GOOGLE FONTS ===============*/
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

/*=============== VARIABLES CSS ===============*/
:root {
  --header-height: 3.5rem; /*56px*/

  /*========== Colors ==========*/
  /*Color mode HSL(hue, saturation, lightness)*/
  --hue: 152;
  --first-color: hsl(var(--hue), 24%, 32%);
  --first-color-alt: hsl(var(--hue), 24%, 28%);
  --first-color-light: hsl(var(--hue), 24%, 66%);
  --first-color-lighten: hsl(var(--hue), 24%, 92%);
  --title-color: hsl(var(--hue), 4%, 15%);
  --text-color: hsl(var(--hue), 4%, 35%);
  --text-color-light: hsl(var(--hue), 4%, 55%);
  --body-color: hsl(var(--hue), 0%, 100%);
  --container-color: #FFF;

  /*========== Font and typography ==========*/
  /*.5rem = 8px | 1rem = 16px ...*/
  --body-font: 'Poppins', sans-serif;
  --big-font-size: 2rem;
  --h1-font-size: 1.5rem;
  --h2-font-size: 1.25rem;
  --h3-font-size: 1rem;
  --normal-font-size: .938rem;
  --small-font-size: .813rem;
  --smaller-font-size: .75rem;

  /*========== Font weight ==========*/
  --font-medium: 500;
  --font-semi-bold: 600;

  /*========== Margenes Bottom ==========*/
  /*.5rem = 8px | 1rem = 16px ...*/
  --mb-0-5: .5rem;
  --mb-0-75: .75rem;
  --mb-1: 1rem;
  --mb-1-5: 1.5rem;
  --mb-2: 2rem;
  --mb-2-5: 2.5rem;

  /*========== z index ==========*/
  --z-tooltip: 10;
  --z-fixed: 100;
}

/* Responsive typography */
@media screen and (min-width: 968px) {
  :root {
    --big-font-size: 3.5rem;
    --h1-font-size: 2.25rem;
    --h2-font-size: 1.5rem;
    --h3-font-size: 1.25rem;
    --normal-font-size: 1rem;
    --small-font-size: .875rem;
    --smaller-font-size: .813rem;
  }
}

/*=============== BASE ===============*/
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html{
  scroll-behavior: smooth;
}

body,
button,
input,
textarea{
  font-family: var(--body-font);
  font-size: var(--normal-font-size);
}

body{
  margin: var(--header-height) 0 0 0;
  background-color: var(--body-color);
  color: var(--text-color);
  transition: .4s; /*For animation dark mode*/
}

button{
  cursor: pointer;
  border: none;
  outline: none;
}

h1,h2,h3{
  color: var(--title-color);
  font-weight: var(--font-semi-bold);
}

ul{
  list-style: none;
}

a{
  text-decoration: none;
}

img{
  max-width: 100%;
  height: auto;
}

/*=============== THEME ===============*/
/*========== Variables Dark theme ==========*/


/*========== 
Color changes in some parts of 
the website, in dark theme 
==========*/

/*=============== REUSABLE CSS CLASSES ===============*/
.section{
  padding: 5.5rem 0 1rem;
}

.section__title,
.section__title-center{
  font-size: var(--h2-font-size);
  margin-bottom: var(--mb-2);
  line-height: 140%;
}

.section__title-center{
  text-align: center;
}

.container{
  max-width: 968px;
  margin-left: var(--mb-1-5);
  margin-right: var(--mb-1-5);
}

.grid{
  display: grid;
}

.main{
  overflow: hidden; /*For animation*/
}

/*=============== HEADER ===============*/


/*=============== NAV ===============*/


/* Show menu */


/* Change background header */


/* Active link */


/*=============== HOME ===============*/


/*=============== BUTTONS ===============*/


/*=============== ABOUT ===============*/


/*=============== STEPS ===============*/


/*=============== PRODUCTS ===============*/


/*=============== QUESTIONS ===============*/


/*Rotate icon, change color of titles and background*/


/*=============== CONTACT ===============*/


/*Input focus move up label*/


/*Input focus sticky top label*/


/*=============== FOOTER ===============*/


/*=============== SCROLL UP ===============*/


/* Show Scroll Up*/


/*=============== SCROLL BAR ===============*/


/*=============== BREAKPOINTS ===============*/
/* For small devices */


/* For medium devices */


/* For large devices */
`
