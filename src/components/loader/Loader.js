import React from 'react';

import './Loader.css';

export default function Loader({ label = 'Loading' }) {
	return <div className='loader'>{label}</div>;
}
