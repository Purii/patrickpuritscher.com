import React, { Component } from 'react';
import Card from '../components/Card';

require('normalize.css');
require('./Root.css');

const styles = {
	stage: {
		flex: 1,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	}
}

export default class Root extends Component {
	render() {
		return(
			<div style={styles.stage}>
				<Card/>
			</div>
		)
	}
}