import React from 'react';
import { ReactTypeformEmbed } from 'react-typeform-embed';

import styles from '../pages/about-css.module.css';

// static assets
import contactIcon from '../../static/etc/images/pages/contact/edit.svg'

class TypeformButton extends React.Component {
  constructor(props) {
    super(props);
    this.openForm = this.openForm.bind(this);
  }

  openForm() {
    this.typeformEmbed.typeform.open();
  }

  render() {
    return (
      <div>
        <ReactTypeformEmbed
          popup={true}
          autoOpen={false}
          url={'https://michael2329.typeform.com/to/kpBMGz'}
          hideHeaders={false}
          hideFooter={false}
          style={{top: -1000}}
          ref={(tf => this.typeformEmbed = tf) }/>
        <button className={styles.typeformButton} onClick={this.openForm}>
        <img className={styles.contactIcon} src={contactIcon} alt="not loaded" />
        Contact Mike
        </button>
      </div>
    );
  }
}

export default TypeformButton;