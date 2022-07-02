const {
  postNewClientFtpDetails,
  putUpdateClientFtpDetails,
  deleteClientFtpDetails,
} = require('../controllers/clientFtpDetailsController');

const router = require('express').Router();

router.post('/:clientId', postNewClientFtpDetails);

router.put('/:id', putUpdateClientFtpDetails);

router.delete('/:id', deleteClientFtpDetails);

module.exports = router;
