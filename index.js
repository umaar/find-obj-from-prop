
function findObjFromProp(collection, source) {
	return collection.filter(collectionItem =>
		Object.keys(source).every(sourceKey =>
			collectionItem.hasOwnProperty(sourceKey) && collectionItem[sourceKey] === source[sourceKey]));
}

module.exports = findObjFromProp;
