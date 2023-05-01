import qs from 'qs';
export const QUERY = (slug) => qs.stringify({ filters: { slug: slug } });