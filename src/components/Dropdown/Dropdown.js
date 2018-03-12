import React, { Component } from 'react';
import { SplitButton, MenuItem } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './Dropdown.style.css';

export class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
        	eventKey: 'ISIN'
        }
    }
    
    selectHandler = (eventKey, event) => {
    	this.setState({
		    eventKey
	    });
    	this.props.getBondData(eventKey);
    };

    render() {
	    const { bonds } = this.props;
	    return (
            <div className='dropdown-wrap'>
	            <SplitButton title={this.state.eventKey} pullRight id='split-button-pull-right'>
		            { bonds.bonds.map(item => {
		            	    return <MenuItem key={item.id}
			                                 eventKey={item.isin}
			                                 onSelect={this.selectHandler}
			                >
				                {item.isin}
				                </MenuItem>
										})
		            }
              </SplitButton>
            </div>
        );
    }
}

Dropdown.propTypes = {
	bonds: PropTypes.shape({
		bonds: PropTypes.array
	}),
	getBondData: PropTypes.func
};