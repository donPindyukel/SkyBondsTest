import { bondsConstants } from '../constants';

const initialState = {
	bonds: [],
	currentBondData: null
};

export function bonds(state = initialState, action) {
	switch (action.type) {
		case bondsConstants.GET_BONDS: {
			return {...state};
		}
		case bondsConstants.GET_BONDS_SUCCESS: {
			return {...state, bonds: [...action.bonds]};
		}
		case bondsConstants.GET_BONDS_FAILURE: {
			return {...state};
		}
		case bondsConstants.GET_BOND_DATA: {
			return {...state};
		}
		case bondsConstants.GET_BOND_DATA_SUCCESS: {
			return {...state, currentBondData: {...action.data}};
		}
		case bondsConstants.GET_BOND_DATA_FAILURE: {
			return {...state};
		}
		default: return state
	}
}