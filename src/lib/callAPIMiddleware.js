import {ActionStates} from 'src/actions/types';

export const callAPIMiddleware = ({dispatch, getState}) => {
	// function generateUUID () {
	// 	var d = new Date().getTime();
	// 	if(window.performance && typeof window.performance.now === "function"){
	// 		d += performance.now(); //use high-precision timer if available
	// 	}
	// 	var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
	// 		var r = (d + Math.random()*16)%16 | 0;
	// 		d = Math.floor(d/16);
	// 		return (c=='x' ? r : (r&0x3|0x8)).toString(16);
	// 	});
	// 	return uuid;
	// }

	return next => action => {
		const {
			// _name,
			callAPI,
			shouldCallAPI = () => true,
			payload = {},
		} = action;

		if (!action.name) {
			// Normal action: pass it on
			return next(action);
		}

		// if (
		// 	!Array.isArray(name) ||
		// 	types.length !== 3 ||
		// 	!types.every(type => typeof type === 'string')
		// ) {
		// 	throw new Error('Expected an array of three string types.');
		// }

		if (typeof callAPI !== 'function') {
			throw new Error('Expected callAPI to be a function.');
		}

		if (!shouldCallAPI(getState())) {
			return undefined;
		}

		// const [ requestType, successType, failureType ] = types;

		dispatch({
			type: action.name + ActionStates.REQUEST,
			payload: payload,
			status: action.name + ActionStates.REQUEST,
		});

		return callAPI()
			.then(response => {
				if (response.status === 200) {
					response.json().then(result => {
						return dispatch({
							type: action.name + ActionStates.COMPLETE,
							payload: result,
							status: action.name + ActionStates.COMPLETE,
						});
					});
				} else {
					response.json().then(result => {
						return dispatch({
							type: action.name + ActionStates.FAIL,
							payload: result,
							status: action.name + ActionStates.FAIL,
						});
					});
				}
			})
			.catch(error => {
				// if (error instanceof Array) {
				// 	error = error.map((v) => {
				// 		if (v instanceof Object)
				// 			return v.id = generateUUID();
				// 		else
				// 			return v;
				// 	});
				// }
				return dispatch({
					type: action.name + ActionStates.FAIL,
					payload: error,
					status: action.name + ActionStates.FAIL,
				});
			});
	};
};
