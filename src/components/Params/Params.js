import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import './Params.style.css';

export class Params extends Component {
    constructor(props) {
        super(props);
    }

	selectHandler = (eventKey, event) => {
		this.setState({
			eventKey
		});
		this.props.setParams(eventKey);
	};

    render() {
        const { params, currentParam } = this.props;
        return (
            <div className="params">
	            <DropdownButton
		            bsStyle={'default'}
		            title={currentParam}
		            id='dropDown'
              >
                { params.map(item => {
                    if (currentParam === item) {
	                    return <MenuItem eventKey={item}
	                                     key={item}
	                                     onSelect={this.selectHandler}
                                       active
	                    >
		                    {item}
	                    </MenuItem>
                    } else {
	                    return <MenuItem eventKey={item}
	                                     key={item}
	                                     onSelect={this.selectHandler}
	                    >
		                    {item}
	                    </MenuItem>
                    }

                })}

	            </DropdownButton>
            </div>
        );
    }
}

Params.propTypes = {
	params: PropTypes.array,
	setParams: PropTypes.func,
  currentParam: PropTypes.string
};