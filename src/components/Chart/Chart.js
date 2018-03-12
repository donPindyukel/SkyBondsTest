import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChartistGraph from 'react-chartist';
import './Chart.style.css';

export class Chart extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        let data, options, type;
        const { bondInfo, period, param } = this.props;
        if (bondInfo.data) {
            data = {
                labels: [...bondInfo.data[param][period].dates],
		            series: [
		              [...bondInfo.data[param][period].values]
		        ]
	        };
            options = {
                high: 32,
                low: 0,
                axisX: {
                    labelInterpolationFnc: function(value, index) {
                        return index % 2 === 0 ? value : null;
			        }
		        }
	        };
            type = 'Line';
        }
        return (
            <div className="ct-chart">
              {data && options && type && <ChartistGraph data={data} options={options} type={type} />}
            </div>
        );
    }
}

Chart.propTypes = {
	bondInfo: PropTypes.any,
  period: PropTypes.string,
  param: PropTypes.string
};