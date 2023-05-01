import { get } from '$lib/api';

// const QUERY = (slug) => qs.stringify({ filters: { slug: slug } });
// console.log(QUERY('test2'));

export async function load({ params }) {
	const { slug } = params;
	try {
		const { data } = await get(`items/${slug}`);
		console.log(data);
		return { data };
	} catch (error) {
		console.log(error);
	}
}
