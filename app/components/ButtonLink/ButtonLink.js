import React, {
  PropTypes,
} from 'react';

import styles from './ButtonLink.css';

const ButtonLink = ({ href, colorScheme = 'default', title }) => {
  const label = title || href;
  if (colorScheme === 'twitter') {
    return (<a className={styles.button__twitter} href={href}>{label}</a>);
  }
  return (<a className={styles.button} href={href}>{label}</a>);
};

ButtonLink.propTypes = {
  href: PropTypes.string.isRequired,
  colorScheme: PropTypes.string,
  title: PropTypes.string,
};

export default ButtonLink;
