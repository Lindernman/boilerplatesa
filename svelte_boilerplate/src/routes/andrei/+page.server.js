import * as api from '$lib/api';

export async function load({ params, fetch }) {
	try {
		const { data } = await api.get('items');
		console.log(data);
		return {};
	} catch (error) {
		console.log(error);
	}
}
