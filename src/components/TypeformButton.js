import React from 'react';
import { ReactTypeformEmbed } from 'react-typeform-embed';

import styles from '../pages/about-css.module.css';

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
        Let's Talk!
        </button>
      </div>
    );
  }
}

export default TypeformButton;