import React, {PropTypes} from 'react';
import Radium from 'radium';

const styles = {
    button: {
        flex: 1,
        lineHeight: 2,
        color: '#fff',
        textDecoration: 'none',
        backgroundColor: '#434343',
        textAlign: 'center',
        ':hover': {
            backgroundColor: '#313131',
            transitionProperty: 'all',
            transitionDuration: '.2s',
            transitionTimingFunction: 'ease-in-out',
            marginTop: -1
        }
    },
    button__twitter: {
        backgroundColor: 'rgba(85, 172, 238, 0.83)',
        ':hover': {
            backgroundColor: '#292f33',
            transitionProperty: 'all',
            transitionDuration: '.2s',
            transitionTimingFunction: 'ease-in-out',
            marginTop: -1
        }
    }
};

const ButtonLink = ({ href, colorScheme = 'default', title }) => {
    const _title = title ? title : href;
    if (colorScheme === 'twitter') {
        return (<a style={Object.assign({}, styles.button, styles.button__twitter)} href={href}>{_title}</a>);
    }
    return (<a style={styles.button} href={href}>{_title}</a>);
};

ButtonLink.propTypes = {
  href: PropTypes.string.isRequired,
  colorScheme: PropTypes.string,
  title: PropTypes.string
};

export default Radium(ButtonLink);
