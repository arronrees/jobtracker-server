const router = require('express').Router();

const ftpRoutes = require('../routes/ftpRoutes');
const emailRoutes = require('../routes/emailRoutes');
const databaseRoutes = require('../routes/databaseRoutes');
const cmsRoutes = require('../routes/cmsRoutes');

const {
  getAllClients,
  getSingleClient,
  postNewClient,
  putUpdateClient,
  deleteClient,
} = require('../controllers/clientController');

router.use('/ftp-details', ftpRoutes);

router.use('/email-details', emailRoutes);

router.use('/database-details', databaseRoutes);

router.use('/cms-details', cmsRoutes);

router.get('/', getAllClients);

router.get('/:id', getSingleClient);

router.post('/', postNewClient);

router.put('/:id', putUpdateClient);

router.delete('/:id', deleteClient);

module.exports = router;
