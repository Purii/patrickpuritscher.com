import React from 'react';
import Card from '../components/Card/Card';
import Hint from '../components/Hint/Hint';

import 'normalize.css';
import styles from './Root.css';

const Root = () => (
  <div className={styles.theatre}>
    <div className={styles.stage}>
      <Card />
    </div>
    <Hint />
  </div>
);
export default Root;
