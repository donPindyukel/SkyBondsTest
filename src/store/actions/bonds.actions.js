import { bondsConstants } from '../constants';
import { bondsService } from '../../services';

export const bondsActions = {
	getBonds,
	getBondData
};

function getBonds() {
	return dispatch => {
		dispatch(request());

		bondsService.getBonds()
			.then(
				data => {
					dispatch(success(data));
				},
				error => {
					dispatch(failure(error));
				}
			);
	};

	function request() { return { type: bondsConstants.GET_BONDS } }
	function success(bonds) { return { type: bondsConstants.GET_BONDS_SUCCESS, bonds } }
	function failure(error) { return { type: bondsConstants.GET_BONDS_FAILURE, error } }
}

function getBondData(isin) {
	return dispatch => {
		dispatch(request());

		bondsService.getBondData(isin)
			.then(
				data => {
					dispatch(success(data));
				},
				error => {
					dispatch(failure(error));
				}
			);
	};

	function request() { return { type: bondsConstants.GET_BOND_DATA } }
	function success(data) { return { type: bondsConstants.GET_BOND_DATA_SUCCESS, data } }
	function failure(error) { return { type: bondsConstants.GET_BOND_DATA_FAILURE, error } }
}