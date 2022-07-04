const {
  postNewClientOtherDetails,
  putUpdateClientOtherDetails,
  deleteClientOtherDetails,
} = require('../controllers/clientOtherDetailsController');

const router = require('express').Router();

router.post('/:clientId', postNewClientOtherDetails);

router.put('/:id', putUpdateClientOtherDetails);

router.delete('/:id', deleteClientOtherDetails);

module.exports = router;
