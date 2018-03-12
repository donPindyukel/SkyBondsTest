import { Data } from '../helpers';

export const bondsService = {
	getBonds,
	getBondData
};

function getBonds() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(Data.nameByISIN);
		}, 1000)
	});
}

function getBondData(isin) {
	return new Promise((resolve, reject) => {
		const bondData = Data.bondsData.filter(item => item.isin === isin)[0];
		setTimeout(() => {
			resolve({
				data: bondData
			})
		}, 1000)
	})
}