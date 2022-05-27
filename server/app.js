require('dotenv').config();
const path = require('path');
const express = require('express');
const cors = require('cors');
const app = express();

const newsApi = require('./routes/newsApi');

/** Middleware helpers */
app.use(express.json());
app.use(cors());
app.use('/', newsApi);

/** Template Engine */
app.set('views', path.join(__dirname, './views')); //eslint-disable-line
app.set('view engine', 'ejs');

const port = process.env.PORT || 3000; //eslint-disable-line
app.listen(port, () => {
	console.log(`Listening on port ${port}...`);
});
