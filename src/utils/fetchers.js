export const getData = async ({ url, endpoint }) => {
	try {
		return await (await fetch(`${url}${endpoint}`)).json();
	} catch (error) {
		throw new Error(error);
	}
};
