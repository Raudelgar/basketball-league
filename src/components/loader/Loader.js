import React from 'react';
import PropTypes from 'prop-types';

import './Loader.css';

export default function Loader({ label = 'Loading' }) {
	return <div className='loader'>{label}</div>;
}

Loader.propTypes = {
	label: PropTypes.string
};
