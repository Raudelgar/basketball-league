import { Component } from 'react';
import PropTypes from 'prop-types';

export default class DynamicImport extends Component {
	constructor(props) {
		super(props);
		this.state = {
			component: null
		};
	}

	componentDidMount() {
		this.props.load().then(mod => this.setState({ component: mod.default }));
	}

	render() {
		return this.props.children(this.state.component);
	}
}

DynamicImport.propTypes = {
	load: PropTypes.func.isRequired
};
