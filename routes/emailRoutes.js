const {
  postNewClientEmailDetails,
  putUpdateClientEmailDetails,
  deleteClientEmailDetails,
} = require('../controllers/clientEmailDetailsController');

const router = require('express').Router();

router.post('/:clientId', postNewClientEmailDetails);

router.put('/:id', putUpdateClientEmailDetails);

router.delete('/:id', deleteClientEmailDetails);

module.exports = router;
