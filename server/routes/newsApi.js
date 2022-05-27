const isomorphicFetch = require('isomorphic-fetch'); //eslint-disable-line
const express = require('express');
const newsRouter = express.Router();

newsRouter.get('/', async (req, res) => {
	try {
		const newsApi = await fetch(
			`https://content.guardianapis.com/search?api-key=${process.env.GUARDIAN_API_KEY}` // eslint-disable-line
		);
		const data = await newsApi.json();
		// res.send(data.response.results);
		res.render('news', { articles: data.response.results });
	} catch (error) {
		console.log(`Error: ${error.message}`);
	}
});

module.exports = newsRouter;
