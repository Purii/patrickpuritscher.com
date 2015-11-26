import React, {Component} from 'react';
import ButtonLink from './ButtonLink';
import Radium from 'radium';

const globalstyles = {
	borderRadius: '10px'
}

const styles = {
	'card': {
		display: 'flex',
		flexDirection: 'column',
		width: '300px',
		backgroundColor: 'rgb(42, 42, 42)',
		backgroundColor: '#343d46',
    	borderRadius: '10px',
    	boxShadow: '0 0 5px 3px rgba(0, 0, 0, 0.1), 2px 2px 8px rgba(0, 0, 0, 0.1)',
    	transitionProperty: 'width',
    	transitionDuration: '0.6s',
    	transitionTimingFunction: 'ease-in-out',
    	marginTop: '20px',
    	'@media (min-width: 350px)': {
    		width: '340px'
    	}
	},
	'header': {
		borderTopLeftRadius: globalstyles.borderRadius,
		borderTopRightRadius: globalstyles.borderRadius,
	},
	'headerImage': {
		backgroundImage: 'url(https://avatars0.githubusercontent.com/u/7056989)',
		backgroundSize: 'cover',
		backgroundPosition: '-0px -40px',
		height: '150px',
		borderTopLeftRadius: globalstyles.borderRadius,
		borderTopRightRadius: globalstyles.borderRadius,
	},
	'headerTitle': {
		display: 'inline-block',
		backgroundColor: 'rgba(199, 199, 199, 0.97)',
		fontFamily: '\'HelveticaNeue-Thin\', \'Helvetica Neue Light\', \'Helvetica Neue\', \'Segoe UI\', Helvetica, Arial, \'Lucida Grande\', sans-serif',
		marginTop: '-5px',
		marginBottom: 0,
		paddingRight: '20px',
    	paddingLeft: '15px',
    	paddingTop: '10px',
    	paddingBottom: '10px',
    	fontWeight: '500',
    	color: '#4e4e4e',
    	fontSize: '24px',
    	textTransform: 'uppercase'
	},
	'body': {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center'
	},
	'bodyText': {
		padding: 0,
		marginLeft: '25px',
		marginRight: '25px',
		color: '#fff',
		fontWeight: '400',
		fontStyle: 'italic',
		textAlign: 'center',
		lineHeight: 1.5,
		fontSize: '15px',
		marginTop: 15,
		marginBottom: 10
	},
	'bodyText__small': {
		marginTop: 0,
		fontSize: '13px',
		color: '#F8F8F8'
	},
	'footer': {
		display: 'flex',
		borderTop: '2px solid rgb(92, 92, 92)',
		borderBottomLeftRadius: globalstyles.borderRadius,
    	borderBottomRightRadius: globalstyles.borderRadius,
    	overflow: 'hidden'
	}
}

class Card extends Component {
	render() {
		return(
			<div style={styles.card}>
				<div style={styles.header}>
					<div style={styles.headerImage}></div>
					<h1 style={styles.headerTitle}>Patrick Puritscher</h1>
				</div>
				<div style={styles.body}>
					<p style={styles.bodyText}>
						Former student in Business Information Management. Longboarder. Startups. Webdeveloper. Docker. React. React Native.
					</p>
					<p style={Object.assign({}, styles.bodyText, styles.bodyText__small)}>
						Stuttgart, Germany
					</p>
				</div>
				<div style={styles.footer}>
					<ButtonLink href="https://github.com/Purii" title="GitHub"/>
					<ButtonLink colorScheme="twitter" href="https://twitter.com/whoispurii" title="Twitter"/>
				</div>
			</div>
		)
	}
}

export default Radium(Card);