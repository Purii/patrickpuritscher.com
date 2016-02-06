import React from 'react';
import Card from '../components/Card';
import Hint from '../components/Hint';
import {StyleRoot} from 'radium';

import 'normalize.css';
import './Root.css';

const styles = {
    theatre: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column'
    },
    stage: {
        display: 'flex',
        flexDirection:'column',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
};

const Root = () => {
    return (
      <StyleRoot style={styles.theatre}>
        <div style={styles.stage}>
          <Card/>
        </div>
        <Hint/>
      </StyleRoot>
    );
};
export default Root;
