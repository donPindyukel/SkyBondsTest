import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TimeFrame.style.css';

export class TimeFrame extends Component {
    constructor(props) {
        super(props);
    }

    selectTimeFrame = (param) => {
        this.setState({
	        currentTimeFrame: param
        });
        this.props.setPeriod(param);
    };

    render() {
        let { period } = this.props;
        return (
            <div className="time-frame">
                <div className={period === 'week' ? 'time-frame-item active' : 'time-frame-item'}
                     onClick={ () => this.selectTimeFrame('week') }
                >
                  Week
                </div>
	              <div className={period === 'month' ? 'time-frame-item active' : 'time-frame-item'}
                     onClick={ () => this.selectTimeFrame('month') }
                >
                  Month
                </div>
	              <div className={period === 'quarter' ? 'time-frame-item active' : 'time-frame-item'}
                     onClick={ () => this.selectTimeFrame('quarter') }
                >
                  Quarter
                </div>
                <div className={period === 'year' ? 'time-frame-item active' : 'time-frame-item'}
                     onClick={ () => this.selectTimeFrame('year') }
                >
                  Year
                </div>
	              <div className={period === 'max' ? 'time-frame-item active' : 'time-frame-item'}
                     onClick={ () => this.selectTimeFrame('max') }
                >
                  Max
                </div>
            </div>
        );
    }
}

TimeFrame.propTypes = {
	setPeriod: PropTypes.func,
  period: PropTypes.string
};