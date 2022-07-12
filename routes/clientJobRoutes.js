const { postNewClientJob } = require('../controllers/clientJobController');

const router = require('express').Router();

router.post('/:clientId', postNewClientJob);

module.exports = router;
