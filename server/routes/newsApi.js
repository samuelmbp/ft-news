// const fetch = require('isomorphic-fetch');
const express = require('express');
const router = express.Router();

const handler = require('../helpers/handler');

router.get('/', handler);

router.get('/headlines', handler);

module.exports = router;
