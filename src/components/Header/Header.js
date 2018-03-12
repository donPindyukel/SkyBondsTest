import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Header.style.css';

export class Header extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { bondInfo } = this.props;
		return (
			<div className='header'>
				<div className='title-wrap'>
					<h1 className='header-title'>{bondInfo.data.name} <span className='number-cap'>{bondInfo.data.cap} <span className='add-num'>{bondInfo.data.addNum}</span></span><span className='currency'>{bondInfo.data.currency}</span></h1>
				</div>
				<div className='info'>
					<div className='isin-ticket'>{bondInfo.data.isin}</div>
					<div className='name'>
						<span className='instrument-name'>{bondInfo.data.instrumentName}</span>,
						<span className='sector'>{bondInfo.data.sector}</span>,
						<span className='code'>{bondInfo.data.code}</span>, till <span>{bondInfo.data.till}</span>
					</div>
				</div>
			</div>
		);
	}
}

Header.propTypes = {
	bondInfo: PropTypes.any
};