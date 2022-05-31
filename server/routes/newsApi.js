const fetch = require('isomorphic-fetch');
const express = require('express');
const router = express.Router();

const searchQuery = (searchParam) => {
	return {
		queryString: searchParam,
		queryContext: {
			curations: ['ARTICLES'],
		},
		resultContext: {
			aspects: ['title', 'lifecycle', 'location', 'summary', 'editorial'],
		},
	};
};

router.get('/headlines', async (req, res) => {
	const searchString = req.query.search;
	console.log(req.body.search);
	console.log(req.query);
	// const { search } = req.query;
	try {
		const response = await fetch(
			`https://api.ft.com/content/search/v1?apiKey=${process.env.FT_API_KEY}`, // eslint-disable-line
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(searchQuery(searchString)),
			}
		);
		const data = await response.json();
		res.render('headlines', { results: data.results[0].results });
	} catch (error) {
		console.log(`Error: ${error.message}`);
	}
});

module.exports = router;
