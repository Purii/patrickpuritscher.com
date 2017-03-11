import React from 'react';
import ButtonLink from '../ButtonLink/ButtonLink';
import styles from './Card.css';

const Card = () => (
  <div className={styles.card}>
    <div className={styles.header}>
      <div className={styles.headerImage} />
      <h1 className={styles.headerTitle}>Patrick Puritscher</h1>
    </div>
    <div className={styles.body}>
      <p className={styles.bodyText}>
        Master's student in business information management.
        Creating software for people to make their life easier, rather than confusing it even more through bad UX.
      </p>
      <p className={styles.bodyText__small}>
        Stuttgart, Germany
      </p>
    </div>
    <div className={styles.footer}>
      <ButtonLink href="https://github.com/Purii" title="GitHub" />
      <ButtonLink colorScheme="twitter" href="https://twitter.com/whoispurii" title="Twitter" />
    </div>
  </div>
);

export default Card;
