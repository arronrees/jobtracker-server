const {
  postNewClientDatabaseDetails,
  putUpdateClientDatabaseDetails,
  deleteClientDatabaseDetails,
} = require('../controllers/clientDatabaseDetailsController');

const router = require('express').Router();

router.post('/:clientId', postNewClientDatabaseDetails);

router.put('/:id', putUpdateClientDatabaseDetails);

router.delete('/:id', deleteClientDatabaseDetails);

module.exports = router;
