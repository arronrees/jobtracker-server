const {
  postNewClientCmsDetails,
  putUpdateClientCmsDetails,
  deleteClientCmsDetails,
} = require('../controllers/clientCmsDetailsController');

const router = require('express').Router();

router.post('/:clientId', postNewClientCmsDetails);

router.put('/:id', putUpdateClientCmsDetails);

router.delete('/:id', deleteClientCmsDetails);

module.exports = router;
