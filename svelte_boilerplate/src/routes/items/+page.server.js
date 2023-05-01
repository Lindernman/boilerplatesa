import { get } from '$lib/api';
import { QUERY } from '$lib/utils';


export async function load({ event }) {
	try {
		const { data } = await get(`items?${QUERY('wea')}`);
		console.log(data);
		return { data };
	} catch (error) {
		console.log(error);
	}
}
