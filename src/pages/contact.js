import React from 'react';
// import * as typeformEmbed from '@typeform/embed'

// global components
import Header from '../components/header';
import ResponsiveHeader from '../components/responsive-header';

import Footer from '../components/footer';

// page components

// styling
import styles from './contact-css.module.css';

// const typeform = typeformEmbed.makePopup (
//   'https://michael2329.typeform.com/to/kpBMGz',
//   {
//     mode: 'popup',
//     autoClose: 3000,
//     hideHeaders: true,
//     hideFooters: true,
//     onSubmit: function() {
//       console.log('Typeform success')

//     }
//   }
// )


  export default () => (
    <div>
      <ResponsiveHeader />
      <Header />
      <div className={styles.contactContainer}>
        <h1 className={styles.contactHeading}>/CONTACT</h1>
        <h2 className={styles.contactSubheading}>Need design help?</h2>
        <h2 className={styles.contactSubheading}>Starting a new project?</h2>
        <h2 className={styles.contactSubheading}>Need Front-End Development help?</h2>


        {/* <button className={styles.contactContactBtn} onClick={() => typeform.open()}>Let's Talk!</button> */}
        

      </div>
      <Footer />
      
    </div>

  )