module.exports = async function(waw) {
	waw.crud('column', {
		create: {
			ensure: waw.next
		},
		get: {
			ensure: waw.next,
			// TODO: pull only those to which I have access
			query: req => { return {}; }
		},
		update: {
			// TODO: update only those to which I have access
			query: req=>{ return { _id: req.body._id }; }
		},
		delete: {
			// TODO: delete only those to which I have access
			query: req=>{ return { _id: req.body._id }; }
		}
	})
};
