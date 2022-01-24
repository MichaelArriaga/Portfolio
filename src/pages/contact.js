import React from 'react';
// global components
import TypeformButton from '../components/TypeformButton';
// page components
import Footer from '../components/Footer';
// styling
import * as styles from './contact-css.module.css';
// static assets
import envelopeImage from '../../static/etc/images/pages/contact/envelope.svg';
import HeroHeader from '../components/general/HeroHeader';
import ReusableHelmet from '../components/ReusableHelmet';

const Contact = () => {
  return (
    <div>
      <ReusableHelmet
        title="Mike Arriaga Contact"
        description="Mike Arriaga Contact"
      />
      <HeroHeader highlighted="contact" />
      <div className={styles.contactContainer}>
        <img
          src={envelopeImage}
          className={styles.envelopeImage}
          alt="not loaded"
        />
        <h1 className={styles.contactHeading}>Contact Mike</h1>
        <h2 className={styles.contactSubHeading}>Need some help?</h2>
        <p className={styles.contactCopy}>
          Mike loves to help teams and individuals.
        </p>
        <p className={styles.contactCopy} style={{ marginBottom: '30px' }}>
          Let's get in touch!
        </p>

        <TypeformButton />
      </div>
      <Footer />
    </div>
  );
};
export default Contact;
