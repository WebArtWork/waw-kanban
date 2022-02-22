module.exports = async function(waw) {
	waw.crud('column', {
		create: {
			ensure: waw.next
		},
		get: {
			ensure: waw.next
		},
		update: {
			query: req=>{ return { _id: req.body._id }; }
		},
		delete: {
			query: req=>{ return { _id: req.body._id }; }
		}
	})
};