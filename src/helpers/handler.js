const fetch = require('isomorphic-fetch');

async function handler(req, res) {
	const searchString = req.query.search;
	const page = req.query.page ? +req.query.page : 1;
	try {
		const response = await fetch(
			`https://api.ft.com/content/search/v1?apiKey=${process.env.FT_API_KEY}`, // eslint-disable-line
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(searchQuery(searchString, page)),
			}
		);
		const data = await response.json();
		res.render('headlines', { results: data.results[0].results });
	} catch (error) {
		console.log(`Error: ${error.message}`);
	}
}

const searchQuery = (searchParam, page) => {
	const HEADLINES_PER_PAGE = 10;
	return {
		queryString: searchParam,
		queryContext: {
			curations: ['ARTICLES'],
		},
		resultContext: {
			maxResults: HEADLINES_PER_PAGE,
			offset: HEADLINES_PER_PAGE * (page - 1),
			aspects: ['title', 'lifecycle', 'location', 'summary', 'editorial'],
		},
	};
};

module.exports = handler;
