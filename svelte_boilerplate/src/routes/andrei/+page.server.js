export async function load({ params, fetch }) {
	let res = await fetch('http://localhost:1337/api/tests');
	let data = await res.json();

	return {
		items: { ...data }
	};
}
