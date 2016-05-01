import React from 'react';

const styles = {
  hint: {
    lineHeight: 2,
    padding: '10px',
    fontSize: '13px',
    color: '#fff',
    backgroundColor: '#343d46',
    borderTop: '2px solid #2B343E',
    textAlign: 'center',
    marginTop: '20px',
  },
};

const Hint = () => (
  <div style={styles.hint}>
    Cookies help me to improve my website. By using my website, you agree to the use of cookies.
  </div>
);

export default Hint;
