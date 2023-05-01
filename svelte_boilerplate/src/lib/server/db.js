import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER } from '$env/static/private';
import pkg from 'pg';
const { Pool } = pkg;

const db = new Pool({
	database: DB_NAME,
	user: DB_USER,
	host: DB_HOST,
	port: DB_PORT,
	password: DB_PASSWORD,
	max: 30
});

export const query = async (text, params) => {
	try {
		const { rows } = await db.query(text, params);
		return rows;
	} catch (error) {
		throw error;
	}
};
