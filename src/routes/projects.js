const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', async (req, res, next) => {
		res.render('projects', { title: 'Projects'})
});

module.exports = router;