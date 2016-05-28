
function findObjFromProp(collection, source) {
	return collection.filter(collectionItem => Object.keys(source).every(sourceKey => collectionItem.hasOwnProperty(sourceKey) &&
				collectionItem[sourceKey] === source[sourceKey]));
}

const result = findObjFromProp(
	[
		{a: 1, b: 2},
		{a: 1},
		{a: 1, b: 2, c: 2}
	], {a: 1, c: 2}
);

console.log(result);
