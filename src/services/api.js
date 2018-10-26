export default async function API(request) {
	let collection = await request.get();
	let data = [];

	collection.forEach(row => data.push(Object.assign({id:row.id},row.data())));
	return data;
}
