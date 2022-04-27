import styled from 'styled-components'
import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Questions } from './components/Questions'

export const Home = () => {
  const [darkTheme, setDarkTheme] = useState(false)
  const showDarkTheme = () => setDarkTheme(!darkTheme)

  return (
    <body className={darkTheme ? 'dark-theme' : ''}>
      <Wrapper>
        <Navbar darkTheme={darkTheme} showDarkTheme={showDarkTheme} />

        <main className="main">
          {/* <!--==================== HOME ====================--> */}
          <section className="home" id="home">
            <div className="home__container container grid">
              <img src="img/home.png" alt="" className="home__img" />

              <div className="home__data">
                <h1 className="home__title">
                  Plants will make <br /> your life better
                </h1>
                <p className="home__description">
                  Create incredible plant design for your offices or
                  apastaments. Add fresness to your new ideas.
                </p>
                <a to="#about" className="button button--flex">
                  Explore{' '}
                  <i className="ri-arrow-right-down-line button__icon"></i>
                </a>
              </div>

              <div className="home__social">
                <span className="home__social-follow">Follow Us</span>

                <div className="home__social-links">
                  <a
                    to="https://www.facebook.com/"
                    target="_blank"
                    className="home__social-link"
                  >
                    <i className="ri-facebook-fill"></i>
                  </a>
                  <a
                    to="https://www.instagram.com/"
                    target="_blank"
                    className="home__social-link"
                  >
                    <i className="ri-instagram-line"></i>
                  </a>
                  <a
                    to="https://twitter.com/"
                    target="_blank"
                    className="home__social-link"
                  >
                    <i className="ri-twitter-fill"></i>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* <!--==================== ABOUT ====================--> */}
          <section className="about section container" id="about">
            <div className="about__container grid">
              <img src="img/about.png" alt="" className="about__img" />

              <div className="about__data">
                <h2 className="section__title about__title">
                  Who we really are & <br /> why choose us
                </h2>

                <p className="about__description">
                  We have over 4000+ unbiased reviews and our customers trust
                  our plant process and delivery service every time
                </p>

                <div className="about__details">
                  <p className="about__details-description">
                    <i className="ri-checkbox-fill about__details-icon"></i>
                    We always deliver on time.
                  </p>
                  <p className="about__details-description">
                    <i className="ri-checkbox-fill about__details-icon"></i>
                    We give you guides to protect and care for your plants.
                  </p>
                  <p className="about__details-description">
                    <i className="ri-checkbox-fill about__details-icon"></i>
                    We always come over for a check-up after sale.
                  </p>
                  <p className="about__details-description">
                    <i className="ri-checkbox-fill about__details-icon"></i>
                    100% money back guaranteed.
                  </p>
                </div>

                <a to="#" className="button--link button--flex">
                  Shop Now{' '}
                  <i className="ri-arrow-right-down-line button__icon"></i>
                </a>
              </div>
            </div>
          </section>

          {/* <!--==================== STEPS ====================--> */}
          <section className="steps section container">
            <div className="steps__bg">
              <h2 className="section__title-center steps__title">
                Steps to start your <br /> plants off right
              </h2>

              <div className="steps__container grid">
                <div className="steps__card">
                  <div className="steps__card-number">01</div>
                  <h3 className="steps__card-title">Choose Plant</h3>
                  <p className="steps__card-description">
                    We have several varieties plants you can choose from.
                  </p>
                </div>

                <div className="steps__card">
                  <div className="steps__card-number">02</div>
                  <h3 className="steps__card-title">Place an order</h3>
                  <p className="steps__card-description">
                    Once your order is set, we move to the next step which is
                    the shipping.
                  </p>
                </div>

                <div className="steps__card">
                  <div className="steps__card-number">03</div>
                  <h3 className="steps__card-title">Get plants delivered</h3>
                  <p className="steps__card-description">
                    Our delivery process is easy, you receive the plant direct
                    to your door.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* <!--==================== PRODUCTS ====================--> */}
          <section className="product section container" id="products">
            <h2 className="section__title-center">
              Check out our <br /> products
            </h2>

            <p className="product__description">
              Here are some selected plants from our showroom, all are in
              excellent shape and has a long life span. Buy and enjoy best
              quality.
            </p>

            <div className="product__container grid">
              <article className="product__card">
                <div className="product__circle"></div>

                <img src="img/product1.png" alt="" className="product__img" />

                <h3 className="product__title">Cacti Plant</h3>
                <span className="product__price">$19.99</span>

                <button className="button--flex product__button">
                  <i className="ri-shopping-bag-line"></i>
                </button>
              </article>

              <article className="product__card">
                <div className="product__circle"></div>

                <img src="img/product2.png" alt="" className="product__img" />

                <h3 className="product__title">Cactus Plant</h3>
                <span className="product__price">$11.99</span>

                <button className="button--flex product__button">
                  <i className="ri-shopping-bag-line"></i>
                </button>
              </article>

              <article className="product__card">
                <div className="product__circle"></div>

                <img src="img/product3.png" alt="" className="product__img" />

                <h3 className="product__title">Aloe Vera Plant</h3>
                <span className="product__price">$7.99</span>

                <button className="button--flex product__button">
                  <i className="ri-shopping-bag-line"></i>
                </button>
              </article>

              <article className="product__card">
                <div className="product__circle"></div>

                <img src="img/product4.png" alt="" className="product__img" />

                <h3 className="product__title">Succulent Plant</h3>
                <span className="product__price">$5.99</span>

                <button className="button--flex product__button">
                  <i className="ri-shopping-bag-line"></i>
                </button>
              </article>

              <article className="product__card">
                <div className="product__circle"></div>

                <img src="img/product5.png" alt="" className="product__img" />

                <h3 className="product__title">Succulent Plant</h3>
                <span className="product__price">$10.99</span>

                <button className="button--flex product__button">
                  <i className="ri-shopping-bag-line"></i>
                </button>
              </article>

              <article className="product__card">
                <div className="product__circle"></div>

                <img src="img/product6.png" alt="" className="product__img" />

                <h3 className="product__title">Green Plant</h3>
                <span className="product__price">$8.99</span>

                <button className="button--flex product__button">
                  <i className="ri-shopping-bag-line"></i>
                </button>
              </article>
            </div>
          </section>

          {/* <!--==================== QUESTIONS ====================--> */}
          <section className="questions section" id="faqs">
            <h2 className="section__title-center questions__title container">
              Some common questions <br /> were often asked
            </h2>
            <Questions />
          </section>

          {/* <!--==================== CONTACT ====================--> */}
          <section className="contact section container" id="contact">
            <div className="contact__container grid">
              <div className="contact__box">
                <h2 className="section__title">
                  Reach out to us today <br /> via any of the given <br />{' '}
                  information
                </h2>

                <div className="contact__data">
                  <div className="contact__information">
                    <h3 className="contact__subtitle">
                      Call us for instant support
                    </h3>
                    <span className="contact__description">
                      <i className="ri-phone-line contact__icon"></i>
                      +999 888 777
                    </span>
                  </div>

                  <div className="contact__information">
                    <h3 className="contact__subtitle">Write us by mail</h3>
                    <span className="contact__description">
                      <i className="ri-mail-line contact__icon"></i>
                      user@email.com
                    </span>
                  </div>
                </div>
              </div>

              <form action="" className="contact__form">
                <div className="contact__inputs">
                  <div className="contact__content">
                    <input
                      type="email"
                      placeholder=" "
                      className="contact__input"
                    />
                    <label htmlFor="" className="contact__label">
                      Email
                    </label>
                  </div>

                  <div className="contact__content">
                    <input
                      type="text"
                      placeholder=" "
                      className="contact__input"
                    />
                    <label htmlFor="" className="contact__label">
                      Subject
                    </label>
                  </div>

                  <div className="contact__content contact__area">
                    <textarea
                      name="message"
                      placeholder=" "
                      className="contact__input"
                    ></textarea>
                    <label htmlFor="" className="contact__label">
                      Message
                    </label>
                  </div>
                </div>

                <button className="button button--flex">
                  Send Message
                  <i className="ri-arrow-right-up-line button__icon"></i>
                </button>
              </form>
            </div>
          </section>
        </main>

        {/* <!--==================== FOOTER ====================--> */}
        <footer className="footer section">
          <div className="footer__container container grid">
            <div className="footer__content">
              <a to="#" className="footer__logo">
                <i className="ri-leaf-line footer__logo-icon"></i> Plantex
              </a>

              <h3 className="footer__title">
                Subscribe to our newsletter <br /> to stay update
              </h3>

              <div className="footer__subscribe">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="footer__input"
                />

                <button className="button button--flex footer__button">
                  Subscribe
                  <i className="ri-arrow-right-up-line button__icon"></i>
                </button>
              </div>
            </div>

            <div className="footer__content">
              <h3 className="footer__title">Our Address</h3>

              <ul className="footer__data">
                <li className="footer__information">1234 - Peru</li>
                <li className="footer__information">La Libertad - 43210</li>
                <li className="footer__information">123-456-789</li>
              </ul>
            </div>

            <div className="footer__content">
              <h3 className="footer__title">Contact Us</h3>

              <ul className="footer__data">
                <li className="footer__information">+999 888 777</li>

                <div className="footer__social">
                  <a
                    to="https://www.facebook.com/"
                    className="footer__social-link"
                  >
                    <i className="ri-facebook-fill"></i>
                  </a>
                  <a
                    to="https://www.instagram.com/"
                    className="footer__social-link"
                  >
                    <i className="ri-instagram-line"></i>
                  </a>
                  <a to="https://twitter.com/" className="footer__social-link">
                    <i className="ri-twitter-fill"></i>
                  </a>
                </div>
              </ul>
            </div>

            <div className="footer__content">
              <h3 className="footer__title">We accept all credit cards</h3>

              <div className="footer__cards">
                <img src="img/card1.png" alt="" className="footer__card" />
                <img src="img/card2.png" alt="" className="footer__card" />
                <img src="img/card3.png" alt="" className="footer__card" />
                <img src="img/card4.png" alt="" className="footer__card" />
              </div>
            </div>
          </div>

          <p className="footer__copy">&#169; Bedimcode. All rigths reserved</p>
        </footer>

        {/* <!--=============== SCROLL UP ===============--> */}
        <a to="#" className="scrollup" id="scroll-up">
          <i className="ri-arrow-up-fill scrollup__icon"></i>
        </a>

        {/* <!--=============== SCROLL REVEAL ===============--> */}
        {/* <script src="js/scrollreveal.min.js"></script> */}

        {/* <!--=============== MAIN JS ===============--> */}
        {/* <script src="js/main.js"></script> */}
      </Wrapper>
    </body>
  )
}

export const Wrapper = styled.div`
  .container {
    max-width: 968px;
    margin-left: var(--mb-1-5);
    margin-right: var(--mb-1-5);
  }

  @media screen and (min-width: 992px) {
    .container {
      margin-left: auto;
      margin-right: auto;
    }
  }

  @media screen and (max-width: 320px) {
    .container {
      margin-left: var(--mb-1);
      margin-right: var(--mb-1);
    }
  }
`

// export const Sections = styled.div`
//   @media screen and (min-width: 767px) {
//     grid-template-columns: repeat(2, 1fr);
//   }
// `

// export const WrapperQuestions = styled.div`
//   gap: 1.5rem;
//   padding: 1.5rem 0;

//   @media screen and (min-width: 767px) {
//     align-items: flex-start;
//   }

//   @media screen and (min-width: 992px) {
//     padding: 1rem 0 4rem;
//   }
// `
