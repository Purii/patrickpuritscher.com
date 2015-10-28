import React, {Component} from 'react';

const styles = {
	hint: {
		lineHeight: 2,
		padding: '10px',
		fontSize: '13px',
		color: '#fff',
		backgroundColor: '#343d46',
		borderTop: '2px solid #2B343E',
		textAlign:'center'
	}
}
export default class Hint extends Component {
	render() {
		return (
			<div style={styles.hint}>
				Cookies help me to improve my website. By using my website, you agree to the use of cookies.
			</div>
		)
	}
}