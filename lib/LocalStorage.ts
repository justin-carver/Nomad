export const saveToLocalStorage = (key: string, obj: any, appendObject?: boolean) => {
	let jsonString = JSON.stringify(obj);
	if (!appendObject) {
		localStorage.setItem('drafts', jsonString);
	} else {
		let jsonObject = JSON.parse(jsonString);
		let previousObject = JSON.parse(getFromLocalStorage('drafts') as string);
		let newObject = Object.assign(previousObject, jsonObject);
		localStorage.setItem('drafts', JSON.stringify(newObject));
	}
};

export const saveDraftsObject = (obj: any, appendObject?: boolean) =>
	saveToLocalStorage('drafts', obj, appendObject);

export const getFromLocalStorage = (key: string): string | null => {
	return localStorage.getItem(key);
};

export const getDraftsObject = (): string | null => {
	return getFromLocalStorage('drafts');
};
