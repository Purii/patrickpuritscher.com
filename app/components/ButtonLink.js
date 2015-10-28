import React, {Component, PropTypes} from 'react';
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
}

@Radium
export default class ButtonLink extends Component {
	render() {
		const href = this.props.href;
		const colorScheme = this.props.colorScheme || 'default';
		const title = this.props.title ? this.props.title : href;

		if(colorScheme === 'twitter') return(<a style={Object.assign({}, styles.button, styles.button__twitter)} href={href}>{title}</a>)
		return(<a style={styles.button} href={href}>{title}</a>)
	}
}

ButtonLink.propTypes = {
  href: PropTypes.string.isRequired,
  colorScheme: PropTypes.string,
  title: PropTypes.string
}