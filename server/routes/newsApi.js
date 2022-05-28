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

router.get('/', async (req, res) => {
	try {
		const newsApi = await fetch(
			`https://content.guardianapis.com/search?api-key=${process.env.GUARDIAN_API_KEY}` // eslint-disable-line
		);
		const data = await newsApi.json();
		res.render('news', { articles: data.response.results });
	} catch (error) {
		console.log(`Error: ${error.message}`);
	}
});

router.get('/headlines', async (req, res) => {
	const searchParam = req.body.search;
	try {
		const response = await fetch(
			`http://api.ft.com/content/search/v1?apiKey=${process.env.FT_API_KEY}`, // eslint-disable-line
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(searchQuery(searchParam)),
			}
		);
		const data = await response.json();
		// console.log(data.results[0].title.title);
		res.render('headlines', { results: data.results[0].results });
		// res.send(data);
	} catch (error) {
		console.log(`Error: ${error.message}`);
	}
});

module.exports = router;
