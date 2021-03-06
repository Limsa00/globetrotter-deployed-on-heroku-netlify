import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './homepage.scss';

// import images ressources
import mountain from 'src/assets/images/thumbnail-top.png';
import lake from 'src/assets/images/thumbnail-bottom.png';
import mapIcon from 'src/assets/images/schedule.png';
import gpsIcon from 'src/assets/images/gps.png';
import luggageIcon from 'src/assets/images/luggage.png';
import money from 'src/assets/images/money.png';
import family from 'src/assets/images/family.png';

const Homepage = ({ user }) => {
  // Parallaxe animation
  const animations = () => {
    const title = document.querySelector('.title'); // title over the thumbnail
    const mountainThmb = document.querySelector('.mountain'); // Mountain to translate
    const header = document.querySelector('.container'); // Whole container
    const navbar = document.querySelector('nav'); // Navigation Menu

    window.addEventListener('scroll', () => {
      const value = window.scrollY; // Number of pixels scrolled on Y axis
      const headerHeight = header.offsetHeight;

      // translate the mountain behind the lake on scroll
      mountainThmb.style.transform = `translateY(${value * 0.2}px)`;

      // Translate the navbar with the same value to avoid space
      // between navbar and mountain image on scroll
      navbar.style.transform = `translateY(${value * 0.2}px)`;

      // Title slighlty translate and disappear on scroll
      title.style.transform = `translateY(${value * 0.3}px)`;
      title.style.opacity = (-value / (headerHeight / 2)) + 1;
    });
  };

  useEffect(() => {
    animations();
  }, []);

  return (
    <div className="page">
      <div className="container">
        <div className="background">
          <img src={mountain} alt="mountain" className="mountain bg" />
          <img src={lake} alt="lake" className="lake bg" />
        </div>

        <div className="title">GlobeTrotter</div>
        <Link to={user.id ? '/creer-un-voyage' : '/inscription'}>
          <button type="button" className="create">Planifier un voyage</button>
        </Link>

      </div>

      <div className="homepage-description">

        <section className="homepage-section">
          <div className="homepage-card">
            <div className="homepage-card-picture">
              <img src={mapIcon} alt="map" />
            </div>
            <div className="homepage-card-description">
              <h1>Planifiez un voyage</h1>
              <p>
                Choisissez votre future destination et g??rez votre voyage via une interface
                simple et intuitive
              </p>
            </div>
          </div>
        </section>

        <section className="homepage-section">
          <div className="homepage-card">
            <div className="homepage-card-picture">
              <img src={gpsIcon} alt="map" />
            </div>
            <div className="homepage-card-description">
              <h1>Facile ?? prendre en main</h1>
              <p>
                S??l??ctionnez les h??bergements, moyens de transports et activit??s
                qui vous int??ressent, puis validez et visualisez en quelques clics
                les diff??rentes ??tapes du voyage.
              </p>
            </div>
          </div>
        </section>

        <section className="homepage-section">
          <div className="homepage-card">
            <div className="homepage-card-picture">
              <img src={money} alt="money" />
            </div>
            <div className="homepage-card-description">
              <h1>Ma??trisez votre budget</h1>
              <p>
                Visualisez simplement le co??t total et d??taill?? de votre voyage
                et ajustez le en fonction de vos besoins.
              </p>
            </div>
          </div>
        </section>

        <section className="homepage-section">
          <div className="homepage-card">
            <div className="homepage-card-picture">
              <img src={family} alt="family" />
            </div>
            <div className="homepage-card-description">
              <h1>Invitez des participants</h1>
              <p>
                Invitez vos amis, coll??gues, membres de la famille,
                ?? prendre part au voyage et acc??der ?? toutes les informations n??cessaires.
              </p>
            </div>
          </div>
        </section>

        <section className="homepage-section">
          <div className="homepage-card">
            <div className="homepage-card-picture">
              <img src={luggageIcon} alt="map" />
            </div>
            <div className="homepage-card-description">
              <h1>C'est parti !</h1>
              <p>Tout est pr??t, il ne vous reste plus qu'?? pr??parer votre valise !</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

Homepage.propTypes = {
  user: PropTypes.object,
};
Homepage.defaultProps = {
  user: null,
};

export default Homepage;
