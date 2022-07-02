const router = require('express').Router();

const {
  getAllClients,
  getSingleClient,
  postNewClient,
  putUpdateClient,
  deleteClient,
} = require('../controllers/clientController');

router.get('/', getAllClients);

router.get('/:id', getSingleClient);

router.post('/', postNewClient);

router.put('/:id', putUpdateClient);

router.delete('/:id', deleteClient);

module.exports = router;
