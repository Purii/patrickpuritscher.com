import React, { Component } from 'react';
import Card from '../components/Card';
import Hint from '../components/Hint';

require('normalize.css');
require('./Root.css');

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
}

export default class Root extends Component {
	render() {
		return(
			<div style={styles.theatre}>
				<div style={styles.stage}>
					<Card/>
				</div>
				<Hint/>
			</div>
		)
	}
}