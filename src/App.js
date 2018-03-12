import React, { Component } from 'react';
import { connect } from 'react-redux';

import { bondsActions } from './store/actions';
import { Header, Params, TimeFrame, Chart, Dropdown } from './components';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isin: null,
			period: 'week',
			param: 'price'
		}
	}

	componentDidMount() {
		this.props.dispatch(bondsActions.getBonds());
	}

	getBondByISIN = (isin) => {
		this.setState({
			isin,
			period: 'week',
			param: 'price'
		});
		this.props.dispatch(bondsActions.getBondData(isin));
	};

	setPeriod = (period) => {
		this.setState({period});
	};

	setParamsHandler = (param) => {
		this.setState({param})
	};

  render() {
		const { bonds } = this.props;
		const { isin, period, param } = this.state;
    return (
      <div className="App">
	      { isin && bonds.currentBondData && <div>
		      <Header bondInfo={bonds.currentBondData} />
		      <TimeFrame period={period} setPeriod={this.setPeriod} />
		      <Chart bondInfo={bonds.currentBondData} period={period} param={param}/>
		      <Params params={['price', 'yield', 'spread']} currentParam={param} setParams={this.setParamsHandler}/>
	      </div> }
	      <Dropdown bonds={bonds}
	                getBondData={this.getBondByISIN}
	      />
      </div>
    );
  }
}

function mapStateToProps(state) {
	const { bonds } = state;
	return {
		bonds
	};
}

export default connect(mapStateToProps)(App);
