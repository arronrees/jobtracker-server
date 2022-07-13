const {
  postNewClientJob,
  putUpdateClientJob,
} = require('../controllers/clientJobController');

const router = require('express').Router();

router.post('/:clientId', postNewClientJob);

router.put('/:id', putUpdateClientJob);

module.exports = router;
